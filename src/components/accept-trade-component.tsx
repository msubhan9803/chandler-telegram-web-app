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

const SendToCalderaInfo = (showReceiveAddressInfo: boolean, tradeDetails: { cryptoOne: { amount: string, name: string}}, state: { trade_id: string, userId: string, username: string}, formState: { currency1Addr: string, currency2Addr: string}) => {
  const [calderaWalletAddress, setCalderaWalletAddress] = useState('');
  
    useEffect(() => {
      if(!showReceiveAddressInfo) return;
      const guid = crypto.randomBytes(16).toString("hex");
      // Set up the request payload
      const startEscrowConfig: AxiosRequestConfig = {
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/escrow/start-escrow`,
        data: {
          tradeId: state.trade_id,
          endpoint: "http://localhost:3000/escrow-response/" + guid,
          providerId: state.userId,
          providerName: state.username,
          providerWalletAddress: formState.currency1Addr,
          receiverWalletAddress: formState.currency2Addr,
          userSource: "telegram",
        }
      };
      void axios.request<{response: { calderaWalletAddressCryptoOne: string; calderaWalletAddressCryptoTwo: string;}}>(startEscrowConfig)
      .then(escrowResponseData => {
        setCalderaWalletAddress(escrowResponseData.data.response.calderaWalletAddressCryptoOne);
      })
      }, [formState.currency1Addr, formState.currency2Addr, showReceiveAddressInfo, state.trade_id, state.userId, state.username]);
      if(!showReceiveAddressInfo) return <div></div>;
      if (!calderaWalletAddress) return <div>Loading...</div>;
  
      return (
        <ReceiveAddressInfo
                  amount={tradeDetails.cryptoOne.amount}
                  currency={tradeDetails.cryptoOne.name.toUpperCase()}
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
    currency1Addr: false,
    currency2Addr: false,
  });
  const [imagesState, setImagesState] = useState({
    image1: "",
    image2: "",
  });
  const [errorState, setErrorState] = useState({
    currency1Addr: "",
    currency2Addr: "",
  });
  const [submitLoading, setSubmitLoading] = useState(false);



  const [cancelLoading, setCancelLoading] = useState(false);
  const [tradeDetails, setTradeDetails] = useState({
    _id: "",
    tradeType: "",
    cryptoOne: {
      amount: "",
      name: "",
      providerId: "",
      providerName: "",
      userSource: "",
    },
    cryptoTwo: {
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

    if (!formState.currency1Addr) {
      newErrorState.currency1Addr = "Field is required";
    } else {
      newErrorState.currency1Addr = "";
    }

    if (!formState.currency2Addr) {
      newErrorState.currency2Addr = "Field is required";
    } else {
      newErrorState.currency2Addr = "";
    }

    setErrorState(newErrorState);

    // Check if there are any errors
    return !(newErrorState.currency1Addr || newErrorState.currency2Addr);
  }

  const handleNext = async (e: Event) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitLoading(true);

    if(step === 0) {
      setSubmitLoading(false);
      setProgress(50);
      setDisabledInput({
        currency1Addr: true,
        currency2Addr: true,
      });
      setShowReceiveAddressInfo(true);
      void addTrader();
    } else if (step === 1) {
      setSubmitLoading(false);
      enqueueSnackbar("Escrow in progress!", { variant: "info" });

      setTimeout(() => {
        closeSnackbar();
        handleClose();
      }, 2000);
    } else {
      // error
      setSubmitLoading(false);
      enqueueSnackbar("Request not fullfiled successfully!", {
        variant: "error",
      });
    }

    setStep(step+1);
  };

  const handlePrev = async () => {
    setCancelLoading(true);
    await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/escrow/cancel-escrow/${state.trade_id}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setCancelLoading(false);
        enqueueSnackbar(res.message, { variant: "info" });

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

  const getSubmitButtonHandler = (e: Event) => {
    if (step === 0) {
      return handleNext(e);
    }
  };

  const getCancelButtonHandler = (e: Event) => {
    if (step === 0) {
      return handleClose();
    } else {
      return handlePrev();
    }
  };

  const handleGetAssets = async (currencyA: string, currencyB: string) => {
    const listOfAssets = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/get-list-of-assets`
    ).then((res: any) => res.json());

    const currencyOne = listOfAssets.asset_list.find(
      (elem: any) => elem.label.toLowerCase() === currencyA
    );
    const currencyTwo = listOfAssets.asset_list.find(
      (elem: any) => elem.label.toLowerCase() === currencyB
    );

    setImagesState({
      image1: currencyOne.image,
      image2: currencyTwo.image,
    });
  };

  const handleTradeDetailsFetch = async (trade_id: string) => {
    const getTradeDetailsConfig: AxiosRequestConfig = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/get-trade-details/${trade_id}`,
    }
    const response = await axios.request<{
      tradeDetailsResult: any
    }>(getTradeDetailsConfig);

    setTradeDetails(response.data.tradeDetailsResult);
  };

  const handleOnChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (state.currencyA && state.currencyB && state.trade_id) {
      handleGetAssets(state.currencyA, state.currencyB);
      handleTradeDetailsFetch(state.trade_id);
    }
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
            <BuyAllHeaderDiv
              tradeDetails={tradeDetails}
              imagesState={imagesState}
            />

            <div className="flex flex-col items-start justify-start gap-[18px] w-full">
              <div className="relative text-lg font-montserrat text-white text-left">
                {tradeDetails.cryptoTwo.name.toUpperCase()} Address
              </div>
              <ReceiveAddressForm
                name="currency1Addr"
                handleOnChange={handleOnChange}
                value={formState.currency1Addr}
                error={errorState.currency1Addr}
                disabled={disabledInput.currency1Addr}
                placeholder="i.e d1J1WymQy1aVqstxWdY7wE6V1RNFtHkK68g3KKW1Sc3rUmBVF"
              />

              <div className="relative text-lg font-montserrat text-white text-left">
                {tradeDetails.cryptoOne.name.toUpperCase()} Address
              </div>
              <ReceiveAddressForm
                name="currency2Addr"
                handleOnChange={handleOnChange}
                value={formState.currency2Addr}
                error={errorState.currency2Addr}
                disabled={disabledInput.currency2Addr}
                placeholder="i.e kaspa:4v9dfc8y38fhnaa5tyhfr9etrxqpucux6gk78fafrwexgmsaketa7lthh7kzt"
              />
            </div>

            <CustomProgressBar progress={progress} />

            {/* {showReceiveAddressInfo && ( */}
            { SendToCalderaInfo(showReceiveAddressInfo, tradeDetails,state,formState)}
            {/* )} */}
          </div>
          <div className="h-[116px] shrink-0 flex flex-col p-[9px] box-border items-center justify-center gap-[18px]">
            <Button
              text="Submit"
              handleClick={getSubmitButtonHandler}
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
