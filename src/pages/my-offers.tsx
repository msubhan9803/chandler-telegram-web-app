import React, { useState } from "react";
import MainLayout from "@/layouts/main-layout";
import MyOffersCard from "@/components/my-offers-card";
import OfferButton from "@/components/my-offers-button";
import CreateTradeModel from "@/components/create-trade-model";

export default function MyOffers() {
  const cardObjects = [
    {
      title: "Buy All Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
    },
    {
      title: "Partial Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
    },
    {
      title: "Buy All Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
    },
    {
      title: "Partial Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
    },
    {
      title: "Buy All Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
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
    receivingCryptoAddr: "",
    providingCryptoAddr: "",
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

  return (
    <>
      <MainLayout>
        <div className="bg-dark-gray py-3 flex justify-center">
          <OfferButton handleClick={openModal} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {cardObjects.map((card, index) => (
            <MyOffersCard key={index} cardData={card} />
          ))}
        </div>

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
      </MainLayout>
    </>
  );
}
