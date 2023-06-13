import React, { useEffect, useState } from "react";
import Filter from "@/components/filter-OTC-trading";
import MainLayout from "@/layouts/main-layout";
import OtcTradingCard from "@/components/otc-trading-card";
import StartTradeModel from "@/components/start-trade-model";
import CurrencyFilterModal from "@/components/currency-filter-modal";
import Spinner from "@/components/spinner";

export default function OtcTrading() {
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
  const [currencyFilter, setCurrencyFilter] = useState({
    currencyOne: "",
    currencyTwo: "",
  });
  const [isCurrencyFilterOpen, setIsCurrencyFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    closeModal();
  };

  const handleCurrencyFilterClose = () => {
    setIsCurrencyFilterOpen(!isCurrencyFilterOpen);
  };

  const handleFetchTradeList = async () => {
    setLoading(true);
    let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/get-trade-list`;

    if (currencyFilter.currencyOne && currencyFilter.currencyTwo) {
      url += `?buyName=${currencyFilter.currencyOne}&sellName=${currencyFilter.currencyTwo}`;
    }

    const data = await fetch(url).then((res) => res.json());
    setTradesList(data.response);
    setLoading(false);
  };

  const handleFilterUpdate = (values: any) => {
    setCurrencyFilter(values);
  };

  const handleSelectTrade = (state: any) => {
    openModal();
    setState({
      ...state,
      trade_id: state.tradeId,
      currencyA: state.cryptoOne.name,
      currencyB: state.cryptoTwo.name,
    });
  };

  useEffect(() => {
    setState({
      ...state,
      userId: "7934567890",
      username: "beep",
      chatId: "4d91d4f5",
    });

    handleFetchTradeList();
  }, []);

  useEffect(() => {
    handleFetchTradeList();
  }, [currencyFilter.currencyOne, currencyFilter.currencyOne]);

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
        <Filter handleCurrencyFilterClose={handleCurrencyFilterClose} />

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
            {tradesList?.map((trade, index) => (
              <OtcTradingCard
                key={index}
                tradeData={trade}
                handleSelectTrade={handleSelectTrade}
              />
            ))}
          </div>
        )}

        {isOpen && (
          <StartTradeModel
            isOpen={isOpen}
            closeModal={closeModal}
            state={state}
            setState={setState}
            formState={formState}
            setFormState={setFormState}
            handleClose={handleClose}
          />
        )}

        <CurrencyFilterModal
          currencyFilter={currencyFilter}
          setCurrencyFilter={setCurrencyFilter}
          isCurrencyFilterOpen={isCurrencyFilterOpen}
          setIsCurrencyFilterOpen={setIsCurrencyFilterOpen}
          handleCurrencyFilterClose={handleCurrencyFilterClose}
          handleFilterUpdate={handleFilterUpdate}
        />
      </MainLayout>
    </>
  );
}
