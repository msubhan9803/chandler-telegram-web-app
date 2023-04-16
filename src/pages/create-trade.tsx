import React, { useState } from "react";
import { useSnackbar } from "notistack";
import CurrencyDisclosuer from "@/components/trading-currency";

const currencyList = [
  {
    label: "BTC",
    image: "/btc.svg",
  },
  {
    label: "ETH",
    image: "/eth.svg",
  },
  {
    label: "BUSD",
    image: "/busd.svg",
  },
  {
    label: "TEST",
    image: "/coin-10-1.svg",
  },
  {
    label: "TEST",
    image: "/coin-11-1.svg",
  },
  {
    label: "TEST",
    image: "/coin-7-1.svg",
  },
  {
    label: "TEST",
    image: "/coin-2-1.svg",
  },
  {
    label: "TEST",
    image: "/coin-15-1.svg",
  },
  {
    label: "TEST",
    image: "/coin-12-1.svg",
  },
];

export default function CreateTrade() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [selectedTradingCurrency, setSelectedTradingCurrency] =
    useState<number>(-1);
  const [selectedSeekingCurrency, setSelectedSeekingCurrency] =
    useState<number>(-1);

  const [tradingAmount, setTradingAmount] = useState(0);
  const [seekingAmount, setSeekingAmount] = useState(0);

  const handleDisclosuerClick = (id: any) => {
    setDisclosures(
      disclosures.map((d) =>
        d.id === id ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: false }
      )
    );
  };

  const handleTradingCurrencySelect = (index: number) => {
    setSelectedTradingCurrency(index);
  };

  const handleSeekingCurrencySelect = (index: number) => {
    setSelectedSeekingCurrency(index);
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

  const handleClose = () => {
    alert("closing...");
    // window.Telegram.WebApp.close()
  };

  const handleTradingSubmit = (id: string) => {
    if (id === "disclosure-panel-1") {
      if (selectedTradingCurrency === -1) {
        enqueueSnackbar("Please select trading currency", { variant: "error" });
        return;
      }
      if (tradingAmount === 0) {
        enqueueSnackbar("Please enter trading amount", { variant: "error" });
        return;
      }

      setDisclosures(
        disclosures.map((d) =>
          d.id === id ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: !d.isOpen }
        )
      );
    } else {
      if (selectedSeekingCurrency === -1) {
        enqueueSnackbar("Please select seeking currency", { variant: "error" });
        return;
      }
      if (seekingAmount === 0) {
        enqueueSnackbar("Please enter seeking amount", { variant: "error" });
        return;
      }

      enqueueSnackbar("Submitted!", { variant: "success" });

      setTimeout(() => {
        closeSnackbar();
        handleClose();
      }, 2000);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl p-2 space-y-2 bg-[#1e69a0]">
      {disclosures.map(
        (
          { id, isOpen, buttonText, handleCurrencySelect, handleAmount, type },
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
          />
        )
      )}
    </div>
  );
}
