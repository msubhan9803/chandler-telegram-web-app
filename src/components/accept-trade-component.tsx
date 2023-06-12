import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import crypto from "crypto";
import BuyAllHeaderDiv from "@/components/buy-all-header-div";
import ReceiveAddressForm from "@/components/receive-address-form";
import Button from "@/components/button";
import Script from "next/script";
import CustomProgressBar from "@/components/progress-bar";
import ReceiveAddressInfo from "@/components/receive-address-info";
import axios, { AxiosRequestConfig } from "axios";

declare global {
  interface Window {
    Telegram: any;
  }
}

const SendToCalderaInfo = (showReceiveAddressInfo: boolean, tradeDetails: { providingCrypto: { calderaWalletAddress: string; amount: string, name: string}}, state: { escrowId: string; trade_id: string, userId: string, username: string}, formState: { receivingCryptoAddr: string, providingCryptoAddr: string}, onError: (error: string, data: { variant: "error"}) => void) => {
  const [calderaWalletAddress, setCalderaWalletAddress] = useState('');
  
    useEffect(() => {
      if(!showReceiveAddressInfo) return;
      
      if (state.escrowId && state.escrowId !== "") {
        setCalderaWalletAddress(tradeDetails.providingCrypto.calderaWalletAddress);
      } else {
        const guid = crypto.randomBytes(16).toString("hex");
        // Set up the request payload
        const startEscrowConfig: AxiosRequestConfig = {
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/escrow/start-escrow`,
          data: {
            tradeId: state.trade_id,
            endpoint: "http://api-tg.caldera.network/escrow-response/" + guid,
            providerId: state.userId,
            providerName: state.username,
            providerWalletAddress: formState.providingCryptoAddr,
            receiverWalletAddress: formState.receivingCryptoAddr,
            userSource: "telegram",
          }
        };
        void axios.request<{response: { escrowId: string; calderaWalletAddressCryptoOne: string; calderaWalletAddressCryptoTwo: string;}}>(startEscrowConfig)
        .then(escrowResponseData => {
          setCalderaWalletAddress(escrowResponseData.data.response.calderaWalletAddressCryptoTwo);
        })
        .catch(error => {
          onError(error.message, { variant: "error" });
        })
    }
  }, [formState.receivingCryptoAddr, formState.providingCryptoAddr, onError, showReceiveAddressInfo, state.escrowId, state.trade_id, state.userId, state.username, tradeDetails.providingCrypto.calderaWalletAddress]);
    
    if(!showReceiveAddressInfo) return <div></div>;
    if (!calderaWalletAddress || calderaWalletAddress === "") return <div>Loading...</div>;

    return (
      <ReceiveAddressInfo
                amount={tradeDetails.providingCrypto.amount}
                currency={tradeDetails.providingCrypto.name.toUpperCase()}
                address={calderaWalletAddress}
              />
    );
  };

export default function AcceptTradeComponent({
  className,
  state,
  setState,
  formState,
  setFormState,
  isModal,
  handleClose
}: any) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showReceiveAddressInfo, setShowReceiveAddressInfo] = useState(false);
  const [disabledInput, setDisabledInput] = useState({
    receivingCryptoAddr: false,
    providingCryptoAddr: false,
  });
  const [errorState, setErrorState] = useState({
    receivingCryptoAddr: "",
    providingCryptoAddr: "",
  });
  const [submitLoading, setSubmitLoading] = useState(false);



  const [cancelLoading, setCancelLoading] = useState(false);
  const [tradeDetails, setTradeDetails] = useState({
    _id: "",
    tradeType: "",
    providingCrypto: {
      amount: "",
      name: "",
      providerId: "",
      providerName: "",
      userSource: "",
    },
    receivingCrypto: {
      amount: "",
      name: "",
    },
    active: true,
    timestamp: "",
    traders: [],
    tradeId: "",
  });

  function validateForm() {
    let newErrorState = { ...errorState };

    if (!formState.receivingCryptoAddr) {
      newErrorState.receivingCryptoAddr = "Field is required";
    } else {
      newErrorState.receivingCryptoAddr = "";
    }

    if (!formState.providingCryptoAddr) {
      newErrorState.providingCryptoAddr = "Field is required";
    } else {
      newErrorState.providingCryptoAddr = "";
    }

    setErrorState(newErrorState);

    // Check if there are any errors
    return !(newErrorState.receivingCryptoAddr || newErrorState.providingCryptoAddr);
  }

  const handleNext = (e: Event) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitLoading(true);

    if(step === 0) {
      setSubmitLoading(false);
      setProgress(50);
      setDisabledInput({
        receivingCryptoAddr: true,
        providingCryptoAddr: true,
      });
      setShowReceiveAddressInfo(true);
      void addTrader();
    } else if (step === 1) {
      setSubmitLoading(false);
      setProgress(100);
      enqueueSnackbar("Escrow in progress!", { variant: "info" });

      setTimeout(() => {
        closeSnackbar();
        handleClose();
      }, 2000);
    } else {
      // error
      setSubmitLoading(false);
      closeSnackbar();
      handleClose();
    }

    setStep(step+1);
  };

  const handlePrev = () => {
    setCancelLoading(true);

    const cancelEscrow: AxiosRequestConfig = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/escrow/cancel-escrow/${state.escrowId}`,
    };
    void axios.request(cancelEscrow)
      .then((res) => {
        setCancelLoading(false);
        enqueueSnackbar(res.data.response, { variant: "info" });

        setTimeout(() => {
          closeSnackbar();
          handleClose();
        }, 2000);
      })
      .catch((err) => {
        setCancelLoading(false);
        enqueueSnackbar("Request not fullfiled successfully!", {
          variant: "error",
        });
      });
  };

  const addTrader = async () => {
    const payload = {
      tradeId: state.trade_id,
      providerId: state.userId,
    };

    const addTraderConfig: AxiosRequestConfig = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/escrow/add-trader`,
      data: payload,
    }

    await axios.request(addTraderConfig).catch(() => {})
  }

  const getCancelButtonHandler = (e: Event) => {
    if (step === 0) {
      return handleClose();
    } else {
      return handlePrev();
    }
  };

  const handleTradeDetailsFetch = async (state: { trade_id: string; escrowId: string; userId: string;}) => {
    if(state.trade_id && state.trade_id !== "") {
      const getTradeDetailsConfig: AxiosRequestConfig = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/get-trade-details/${state.trade_id}`,
      }
      const response = await axios.request<{
        response: any
      }>(getTradeDetailsConfig);
  
      setTradeDetails({
        providingCrypto: state.userId === response.data.response.cryptoOne.providerId ? response.data.response.cryptoOne : response.data.response.cryptoTwo,
        receivingCrypto: state.userId === response.data.response.cryptoOne.providerId ? response.data.response.cryptoTwo : response.data.response.cryptoOne,
        ...response.data.response,
      });
    } else if (state.escrowId && state.escrowId !== "") {
      const getTradeDetailsConfig: AxiosRequestConfig = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/get-trade-details-by-escrow-id/${state.escrowId}`,
      }
      const response = await axios.request<{
        response: any
      }>(getTradeDetailsConfig);
  
      setTradeDetails({
        providingCrypto: state.userId === response.data.response.cryptoOne.providerId ? response.data.response.cryptoOne : response.data.response.cryptoTwo,
        receivingCrypto: state.userId === response.data.response.cryptoOne.providerId ? response.data.response.cryptoTwo : response.data.response.cryptoOne,
        ...response.data.response,
      });
    }
  };

  const handleOnChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    handleTradeDetailsFetch(state);
  }, [state]);

  return (
    <>
      <Script src="https://telegram.org/js/telegram-web-app.js" />

      <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
        <div className={`${className} rounded-xl w-full bg-dark-gray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-y-auto flex flex-col p-[18px] items-center justify-start gap-[9px] border-[2.5px] border-solid border-zinc-700`}>
          {/* <h2 className="text-white">DEBUG:</h2>
          <p className="text-white">{JSON.stringify(state)}</p>
          <br />
          <hr /> */}

          <div
            className={
              "flex flex-col p-[9px] items-center justify-start gap-[18px] " +
              `${isModal ? "w-full" : "w-full md:w-3/4 lg:w-1/2"}`
            }
          >
            {tradeDetails.receivingCrypto && (
              <>
            <BuyAllHeaderDiv
              providingCrypto={tradeDetails.providingCrypto}
              receivingCrypto={tradeDetails.receivingCrypto}
            />

            <div className="flex flex-col items-start justify-start gap-[18px] w-full">
              <div className="relative text-lg font-montserrat text-white text-left">
                {tradeDetails.providingCrypto.name.toUpperCase()} Address
              </div>
              <ReceiveAddressForm
                name="providingCryptoAddr"
                handleOnChange={handleOnChange}
                value={formState.providingCryptoAddr}
                error={errorState.providingCryptoAddr}
                disabled={disabledInput.providingCryptoAddr}
                placeholder="i.e kaspa:4v9dfc8y38fhnaa5tyhfr9etrxqpucux6gk78fafrwexgmsaketa7lthh7kzt"
              />
              <div className="relative text-lg font-montserrat text-white text-left">
                {tradeDetails.receivingCrypto.name.toUpperCase()} Address
              </div>
              <ReceiveAddressForm
                name="receivingCryptoAddr"
                handleOnChange={handleOnChange}
                value={formState.receivingCryptoAddr}
                error={errorState.receivingCryptoAddr}
                disabled={disabledInput.receivingCryptoAddr}
                placeholder="i.e d1J1WymQy1aVqstxWdY7wE6V1RNFtHkK68g3KKW1Sc3rUmBVF"
              />
            </div>
            </>
            )}

            <CustomProgressBar progress={progress} />

            { SendToCalderaInfo(showReceiveAddressInfo, tradeDetails,state,formState, enqueueSnackbar)}
          </div>
          <div className="h-[116px] shrink-0 flex flex-col p-[9px] box-border items-center justify-center gap-[18px]">
            <Button
              text="Submit"
              handleClick={handleNext}
              classes="bg-primary-main disabled:bg-primary-light text-black"
              loading={submitLoading}
            />
            <Button
              text="Cancel"
              handleClick={getCancelButtonHandler}
              classes="bg-secondary-main disabled:bg-secondary-light text-black"
              loading={cancelLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
}
