import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import BuyAllHeaderDiv from "@/components/buy-all-header-div";
import ReceiveAddressForm from "@/components/receive-address-form";
import Button from "@/components/button";
import Script from "next/script";
import CustomProgressBar from "@/components/progress-bar";
import ReceiveAddressInfo from "@/components/receive-address-info";

declare global {
  interface Window {
    Telegram: any;
  }
}

const CreateTrade: NextPage = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [state, setState] = useState({
    userId: "",
    username: "",
    chatId: "",
  });
  const [formState, setFormState] = useState({
    currency1Addr: "",
    currency2Addr: "",
  });
  const [telegram, setTelegram] = useState("");
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showReceiveAddressInfo, setShowReceiveAddressInfo] = useState(false);
  const [disabledInput, setDisabledInput] = useState({
    currency1Addr: false,
    currency2Addr: false,
  });
  const [errorState, setErrorState] = useState({
    currency1Addr: "",
    currency2Addr: "",
  });

  useEffect(() => {
    if (window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);

      const userId = urlParams.get("userId") as string;
      const username = urlParams.get("username") as string;
      const chatId = urlParams.get("chatId") as string;

      setState({
        userId,
        username,
        chatId,
      });
    }

    if (window.Telegram) {
      setTelegram(window.Telegram);
    }
  }, []);

  useEffect(() => {
    console.log(errorState);
  }, [errorState]);

  const handleOnChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleNext = (e: Event) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setProgress(50);
    setDisabledInput({
      currency1Addr: true,
      currency2Addr: true,
    });
    setShowReceiveAddressInfo(true);
    setStep(1);
  };

  const hanldePrev = () => {
    setProgress(0);
    setDisabledInput({
      currency1Addr: false,
      currency2Addr: false,
    });
    setShowReceiveAddressInfo(false);
    setStep(0);
  };

  const handleSubmit = async () => {
    // Set up the request payload
    const payload = {
      chat_id: state.chatId,
      message: {
        currency1Addr: formState.currency1Addr,
        currency2Addr: formState.currency2Addr,
      },
    };

    const response = await fetch("/api/accept-trade", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    console.log("Message sent successfully:", response);
    if (response.status === 200) {
      enqueueSnackbar("Submitted!", { variant: 'success' });

      setTimeout(() => {
        closeSnackbar();
        handleClose();
      }, 2000)
    }
  };

  const handleClose = () => {
    // alert("closing...");
    window.Telegram.WebApp.close()
  };

  const getSubmitButtonHandler = (e: Event) => {
    if (step === 0) {
      return handleNext(e);
    } else {
      return handleSubmit();
    }
  };

  const getCancelButtonHandler = (e: Event) => {
    if (step === 0) {
      return handleClose();
    } else {
      return hanldePrev();
    }
  };

  return (
    <>
      <Script src="https://telegram.org/js/telegram-web-app.js" />

      <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="rounded-xl h-screen w-full bg-dark-gray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-y-auto flex flex-col p-[18px] items-center justify-start gap-[9px] border-[2.5px] border-solid border-zinc-700">
          {/* <h2>DEBUG:</h2>
        {JSON.stringify(state)}
        <br />
        <hr /> */}

          <div className="flex w-full md:w-3/4 lg:w-1/2 flex-col p-[9px] items-center justify-start gap-[18px]">
            <BuyAllHeaderDiv />

            <div className="flex flex-col items-start justify-start gap-[18px] w-full">
              <div className="relative text-lg font-montserrat text-white text-left">
                BTC Receive Address
              </div>
              <ReceiveAddressForm
                name="currency1Addr"
                handleOnChange={handleOnChange}
                value={formState.currency1Addr}
                error={errorState.currency1Addr}
                disabled={disabledInput.currency1Addr}
              />

              <div className="relative text-lg font-montserrat text-white text-left">
                ETH Receive Address
              </div>
              <ReceiveAddressForm
                name="currency2Addr"
                handleOnChange={handleOnChange}
                value={formState.currency2Addr}
                error={errorState.currency2Addr}
                disabled={disabledInput.currency2Addr}
              />
            </div>

            <CustomProgressBar progress={progress} />

            {showReceiveAddressInfo && (
              <ReceiveAddressInfo
                amount="0.05650702"
                currency="BTC"
                address="cbb8bf04-0b53-49d4-bc2d-367afa7194ba"
              />
            )}
          </div>
          <div className="h-[116px] shrink-0 flex flex-col p-[9px] box-border items-center justify-center gap-[18px]">
            <Button
              text="Submit"
              handleClick={getSubmitButtonHandler}
              classes="bg-primary-main text-black"
            />
            <Button
              text="Cancel"
              handleClick={getCancelButtonHandler}
              classes="bg-secondary-main text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTrade;
