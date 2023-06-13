import React from "react";
import CreateTradeCurrency from "./create-trade-currency";

export default function TradingCurrency({
  id,
  isOpen,
  buttonText,
  currencyList,
  selectedCurrency,
  amount,
  handleDisclosuerClick,
  handleCurrencySelect,
  handleAmount,
  handleTradingSubmit,
  loading,
  showLoader,
}: {
  id: any;
  isOpen: any;
  buttonText: any;
  currencyList: any;
  selectedCurrency: any;
  amount: any;
  handleDisclosuerClick: any;
  handleCurrencySelect: any;
  handleAmount: any;
  handleTradingSubmit: any;
  loading: boolean;
  showLoader: boolean;
}) {
  return (
    <>
      <button
        className="flex flex-col w-full rounded-3xl bg-background-dark px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
        onClick={() => handleDisclosuerClick(id)}
        aria-expanded={isOpen}
        {...(isOpen && { "aria-controls": id })}
      >
        <div className="relative font-medium m-auto">{buttonText}:</div>
        <div className="relative box-border m-auto w-3/4 my-1 h-px shrink-0 border-t-[1px] border-solid border-gray-600" />
        <span className="m-auto">Select coin</span>
      </button>
      {isOpen && (
        <div className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-background-dark rounded-3xl">
          <CreateTradeCurrency
            id={id}
            amount={amount}
            selectedCurrency={selectedCurrency}
            currencyList={currencyList}
            handleCurrencySelect={handleCurrencySelect}
            handleAmount={handleAmount}
            handleTradingSubmit={handleTradingSubmit}
            loading={loading}
            showLoader={showLoader}
          />
        </div>
      )}
    </>
  );
}
