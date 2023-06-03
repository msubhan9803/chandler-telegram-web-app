import React, { useEffect, useState } from "react";
import Filter from "@/components/filter-OTC-trading";
import MainLayout from "@/layouts/main-layout";
import OtcTradingCard from "@/components/otc-trading-card";
import StartTradeModel from "@/components/start-trade-model";
import CreateTradeModel from "@/components/create-trade-model";

export default function OtcTrading() {
  const cardObjects = [
    {
      title: "Buy All Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: true,
    },
    {
      title: "Partial Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: false,
    },
    {
      title: "Buy All Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: true,
    },
    {
      title: "Partial Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: false,
    },
    {
      title: "Buy All Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: true,
    },
  ];
  let [isOpen, setIsOpen] = useState(false);
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

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    closeModal();
  };

  useEffect(() => {
    // if (window.location.search) {
    //   const urlParams = new URLSearchParams(window.location.search);

    // const userId = urlParams.get("userId") as string;
    // const username = urlParams.get("username") as string;
    // const chatId = urlParams.get("chatId") as string;
    // const trade_id = urlParams.get("trade_id") as string;
    // const currencyA = urlParams.get("currencyA") as string;
    // const currencyB = urlParams.get("currencyB") as string;

    const userId = "7934567890";
    const username = "beep";
    const chatId = "4d91d4f5";
    const trade_id = "646be01eeb7c234c53cf074b";
    const currencyA = "kas";
    const currencyB = "p3d";

    setState({
      userId,
      username,
      chatId,
      trade_id,
      currencyA,
      currencyB,
    });
    // }
  }, []);

  return (
    <>
      <MainLayout>
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {cardObjects.map((card, index) => (
            <OtcTradingCard key={index} cardData={card} openModal={openModal} />
          ))}
        </div>

        {state.chatId && (
          <StartTradeModel
            isOpen={isOpen}
            closeModal={closeModal}
            openModal={openModal}
            state={state}
            setState={setState}
            formState={formState}
            setFormState={setFormState}
            handleClose={handleClose}
          />
        )}
        {state.chatId && (
          <CreateTradeModel
            isOpen={isOpen}
            closeModal={closeModal}
            openModal={openModal}
            state={state}
            setState={setState}
            formState={formState}
            setFormState={setFormState}
            handleClose={handleClose}
          />
        )}
      </MainLayout>
    </>
  );
}
