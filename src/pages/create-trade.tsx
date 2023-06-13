import React, { useState, useEffect } from "react";
import CreateTradeComponent from "@/components/create-trade-component";

export default function CreateTrade() {
  const [state, setState] = useState({
    userId: "",
    username: "",
    chatId: "",
  });
  const [selectedTradingCurrency, setSelectedTradingCurrency] = useState<{
    index: number;
    currency: string;
  }>({
    index: -1,
    currency: "",
  });
  const [selectedSeekingCurrency, setSelectedSeekingCurrency] = useState<{
    index: number;
    currency: string;
  }>({
    index: -1,
    currency: "",
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
  }, []);

  const handleClose = () => {
    window.Telegram.WebApp.close();
  };

  return (
    <CreateTradeComponent
      state={state}
      selectedTradingCurrency={selectedTradingCurrency}
      setSelectedTradingCurrency={setSelectedTradingCurrency}
      selectedSeekingCurrency={selectedSeekingCurrency}
      setSelectedSeekingCurrency={setSelectedSeekingCurrency}
      handleClose={handleClose}
    />
  );
}
