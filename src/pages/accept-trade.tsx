import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import AcceptTradeComponent from "@/components/accept-trade-component";

declare global {
  interface Window {
    Telegram: any;
  }
}

const CreateTrade: NextPage = () => {
  const [state, setState] = useState({
    userId: "",
    username: "",
    chatId: "",
    trade_id: "",
    currencyA: "",
    currencyB: "",
  });
  const [formState, setFormState] = useState({
    currency1Addr: "",
    currency2Addr: "",
  });
  const [telegram, setTelegram] = useState("");

  const handleClose = () => {
    window.Telegram.WebApp.close();
  };

  useEffect(() => {
    if (window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);

      const userId = urlParams.get("userId") as string;
      const username = urlParams.get("username") as string;
      const chatId = urlParams.get("chatId") as string;
      const trade_id = urlParams.get("trade_id") as string;
      const currencyA = urlParams.get("currencyA") as string;
      const currencyB = urlParams.get("currencyB") as string;

      setState({
        userId,
        username,
        chatId,
        trade_id,
        currencyA,
        currencyB,
      });
    }

    if (window.Telegram) {
      setTelegram(window.Telegram);
    }
  }, []);

  return (
    <AcceptTradeComponent
      className="h-screen"
      state={state}
      setState={setState}
      formState={formState}
      setFormState={setFormState}
      isModal={false}
      handleClose={handleClose}
    />
  );
};

export default CreateTrade;
