import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import AcceptTradeComponent from "@/components/accept-trade-component";

declare global {
  interface Window {
    Telegram: any;
  }
}

const AcceptTrade: NextPage = () => {
  const [state, setState] = useState({
    userId: "",
    username: "",
    chatId: "",
    trade_id: "",
    escrowId: "",
    currencyA: "",
    currencyB: "",
  });
  const [formState, setFormState] = useState({
    receivingCryptoAddr: "",
    providingCryptoAddr: "",
  });

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
      const escrowId = urlParams.get("escrowId") as string;
      const currencyA = urlParams.get("currencyA") as string;
      const currencyB = urlParams.get("currencyB") as string;

      setState({
        userId,
        username,
        chatId,
        trade_id,
        escrowId,
        currencyA,
        currencyB,
      });
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

export default AcceptTrade;
