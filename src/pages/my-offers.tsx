import React, { useState, useEffect } from "react";
import MainLayout from "@/layouts/main-layout";
import MyOffersCard from "@/components/my-offers-card";
import OfferButton from "@/components/my-offers-button";
import CreateTradeModel from "@/components/create-trade-model";
import Spinner from "@/components/spinner";

export default function MyOffers() {
  const [loading, setLoading] = useState(false);
  const [tradesList, setTradesList] = useState([]);
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

  const handleFetchTradeList = async () => {
    setLoading(true);
    let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/get-trade-list`;

    const data = await fetch(url).then((res) => res.json());
    setTradesList(data.response);
    setLoading(false);
  };

  useEffect(() => {
    handleFetchTradeList();
  }, []);

  const Loader = () => {
    return (
      <div className="h-96 flex justify-center items-center m-auto">
        <Spinner />
      </div>
    );
  };

  return (
    <>
      <MainLayout>
        <div className="bg-dark-gray py-3 flex justify-center">
          <OfferButton handleClick={openModal} />
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
            {tradesList.map((card, index) => (
              <MyOffersCard key={index} cardData={card} handleFetchTradeList={handleFetchTradeList} />
            ))}
          </div>
        )}

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
