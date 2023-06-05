import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Script from "next/script";
import CurrencyDisclosuer from "@/components/trading-currency";

export default function CreateTradeComponent({
  state,
  selectedTradingCurrency,
  setSelectedTradingCurrency,
  selectedSeekingCurrency,
  setSelectedSeekingCurrency,
}: any) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [tradingAmount, setTradingAmount] = useState(0);
  const [seekingAmount, setSeekingAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currencyList, setCurrencyList] = useState([]);

  const handleTradingCurrencySelect = (index: number, currency: string) => {
    setSelectedTradingCurrency({
      index,
      currency,
    });
  };

  const handleSeekingCurrencySelect = (index: number, currency: string) => {
    setSelectedSeekingCurrency({
      index,
      currency,
    });
  };

  const handleTradingAmount = (e: any) => setTradingAmount(e.target.value);

  const handleSeekingAmount = (e: any) => setSeekingAmount(e.target.value);

  const [disclosures, setDisclosures] = useState([
    {
      id: "disclosure-panel-1",
      isOpen: true,
      buttonText: "Trading",
      handleCurrencySelect: handleTradingCurrencySelect,
      handleAmount: handleTradingAmount,
      type: "trading",
    },
    {
      id: "disclosure-panel-2",
      isOpen: false,
      buttonText: "Seeking",
      handleCurrencySelect: handleSeekingCurrencySelect,
      handleAmount: handleSeekingAmount,
      type: "seeking",
    },
  ]);

  const handleDisclosuerClick = (id: any) => {
    if (disclosures.find((elem) => elem.id === id)?.isOpen) {
      setDisclosures(
        disclosures.map((d) =>
          d.id === id ? { ...d, isOpen: false } : { ...d, isOpen: true }
        )
      );
    } else {
      setDisclosures(
        disclosures.map((d) =>
          d.id === id ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: false }
        )
      );
    }
  };

  const handleClose = () => {
    window.Telegram.WebApp.close();
  };

  const handleClearState = () => {
    setSelectedTradingCurrency({
      index: -1,
      currency: "",
    });
    setSelectedSeekingCurrency({
      index: -1,
      currency: "",
    });
    setTradingAmount(0);
    setSeekingAmount(0);

    handleDisclosuerClick("disclosure-panel-1");
  };

  const handleTradingSubmit = async (id: string) => {
    if (id === "disclosure-panel-1") {
      if (selectedTradingCurrency.index === -1) {
        enqueueSnackbar("Please select trading currency", { variant: "error" });
        return;
      }
      if (tradingAmount === 0) {
        enqueueSnackbar("Please enter trading amount", { variant: "error" });
        return;
      }

      setDisclosures(
        disclosures.map((d) =>
          d.id === id
            ? { ...d, isOpen: !d.isOpen }
            : { ...d, isOpen: !d.isOpen }
        )
      );
    } else {
      if (selectedSeekingCurrency.index === -1) {
        enqueueSnackbar("Please select seeking currency", { variant: "error" });
        return;
      }
      if (seekingAmount === 0) {
        enqueueSnackbar("Please enter seeking amount", { variant: "error" });
        return;
      }

      setLoading(true);

      const payload = {
        cryptoOneName: selectedTradingCurrency.currency.toLowerCase(),
        cryptoOneAmount: tradingAmount,
        cryptoTwoName: selectedSeekingCurrency.currency.toLowerCase(),
        cryptoTwoAmount: seekingAmount,
        providerId: state.userId,
        providerName: state.username,
        providerWalletAddress:
          "kaspa:qpucux6gk78fafrwex4v9dfc8y38fhnaa5tyhfr9etrxgmsaketa7lthh7kzt",
        receiverWalletAddress:
          "d1J1WymQy1aVqstxWdY7wE6V1RNFtHkK68g3KKW1Sc3rUmBVF",
        userSource: "telegram",
      };

      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/create-trade`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((res) => {
          setLoading(false);
          enqueueSnackbar("Submitted!", { variant: "success" });
          handleClearState();
          setTimeout(() => {
            closeSnackbar();
            handleClose();
          }, 2000);
        })
        .catch((err) => {
          setLoading(false);
          enqueueSnackbar("Request not fullfiled successfully!", {
            variant: "error",
          });
        });
    }
  };

  const getCurrencyList = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/get-list-of-assets`)
      .then((response) => response.json())
      .then((result: any) => {
        setCurrencyList(result.asset_list);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getCurrencyList();
  }, []);

  return (
    <>
      <Script src="https://telegram.org/js/telegram-web-app.js" />

      <div className="mx-auto w-full max-w-md rounded-3xl p-2 space-y-2 bg-custom-second-blue">
        {disclosures.map(
          (
            {
              id,
              isOpen,
              buttonText,
              handleCurrencySelect,
              handleAmount,
              type,
            },
            index
          ) => (
            <CurrencyDisclosuer
              key={index}
              id={id}
              isOpen={isOpen}
              buttonText={buttonText}
              currencyList={currencyList}
              selectedCurrency={
                type === "trading"
                  ? selectedTradingCurrency
                  : selectedSeekingCurrency
              }
              amount={type === "trading" ? tradingAmount : seekingAmount}
              handleDisclosuerClick={handleDisclosuerClick}
              handleCurrencySelect={handleCurrencySelect}
              handleAmount={handleAmount}
              handleTradingSubmit={handleTradingSubmit}
              loading={loading}
              showLoader={type === "seeking"}
            />
          )
        )}
      </div>
    </>
  );
}
