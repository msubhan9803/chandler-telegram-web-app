import React, { useState } from "react";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Spinner from "./spinner";

export default function CreateTradeCurrency({
  id,
  selectedCurrency,
  currencyList,
  amount,
  handleCurrencySelect,
  handleAmount,
  handleTradingSubmit,
  loading,
  showLoader,
  setSelectCurrency
}: {
  id: any;
  selectedCurrency: any;
  currencyList: Array<{
    image: string;
    label: string;
  }>;
  amount: any;
  handleCurrencySelect: (index: number, currency: string) => void;
  handleAmount: (e: any) => void;
  handleTradingSubmit: (id: string) => void;
  loading: boolean;
  showLoader: boolean;
  setSelectCurrency: any;
}) {

  const toggleCurrencyEditing = () => setSelectCurrency({
    ...selectedCurrency,
    isCurrencyEditing: !selectedCurrency.isCurrencyEditing
  });

  const handleCurrencySelectChange = (index: number, currency: string) => {
    toggleCurrencyEditing();
    handleCurrencySelect(index, currency);
  }

  return (
    <div className="relative rounded-t-3xs rounded-b-none bg-caldera-l-blue w-full flex flex-col py-[9px] px-2.5 box-border items-start justify-start text-left text-sm text-white font-montserrat">
      <div className="flex flex-col items-center justify-center gap-[18px] m-auto">
        {currencyList.length === 0 ? (
          <div className="h-96 flex justify-center items-center m-auto">
            <Spinner />
          </div>
        ) : (
          <>
            {!selectedCurrency.isCurrencyEditing && selectedCurrency.currency ? (
              <SelectedCurrency
                selectedCurrency={selectedCurrency}
                currencyList={currencyList}
                toggleCurrencyEditing={toggleCurrencyEditing}
              />
            ) : (
              <CurrencyBlocks
                currencyList={currencyList}
                selectedCurrency={selectedCurrency}
                handleCurrencySelect={handleCurrencySelectChange}
              />
            )}
          </>
        )}
        <div className="flex flex-col items-end justify-start">
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="flex flex-row items-center justify-start space-x-4">
              <div className="min-w-[60px] font-light">Ratio:</div>
              <input
                className={`w-[50px] text-center text-white font-montserrat text-sm bg-zinc-700 rounded-8xs overflow-hidden p-2.5 rounded-lg`}
                type="text"
                value="1:1"
                disabled
              />
            </div>

            <div className="flex flex-row items-center justify-start space-x-4">
              <div className="min-w-[60px] font-light">Amount:</div>
              <input
                className={`w-full text-white font-montserrat text-sm bg-zinc-700 rounded-8xs overflow-hidden p-2.5 rounded-lg`}
                type="text"
                value={amount}
                onChange={handleAmount}
              />
              <div className="relative">
                {selectedCurrency?.currency?.toUpperCase() || ""}
              </div>
            </div>
          </div>
          <div className="flex flex-row p-[9px] items-start justify-start gap-[18px]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-light">Fee:</div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-light">2.5%</div>
            </div>
          </div>
        </div>
        <button
          disabled={loading}
          className="
            cursor-pointer
            p-2.5
            bg-[transparent]
            disabled:bg-slate-400
            rounded-xl
            flex
            flex-row
            items-start
            justify-start
            border-[1px]
            border-solid
            border-white
          "
        >
          <div
            className="relative text-base font-medium font-montserrat text-white text-left"
            onClick={() => handleTradingSubmit(id)}
          >
            <div className="flex justify-center items-center">
              <span>Confirm</span>
              {loading && showLoader && <Spinner />}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

function SelectedCurrency({ selectedCurrency, currencyList, toggleCurrencyEditing }: any) {
  return (
    <div
      className="
        flex
        justify-between
        w-full
        items-center
        bg-[transparent]
        rounded-lg
        shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]
        bg-zinc-600
        p-2
      "
    >
      <div className="flex items-center">
        <Image
          width={100}
          height={100}
          className="relative w-9 h-9 shrink-0 overflow-hidden"
          alt=""
          src={currencyList[selectedCurrency.index].image}
        />
        <div className="relative text-lg mx-3 font-light font-montserrat text-white text-left">
          {selectedCurrency.currency.toUpperCase()}
        </div>
      </div>

      <button onClick={toggleCurrencyEditing}>
        <PencilSquareIcon className="h-6 m-auto" />
      </button>
    </div>
  );
}

function CurrencyBlocks({
  currencyList,
  selectedCurrency,
  handleCurrencySelect,
}: any) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-gray-600 pr-2">
      {currencyList.map((currency: any, index: any) => (
        <button
          key={index}
          className={`
              ${selectedCurrency.index === index ? "bg-zinc-600" : "bg-none"}
              cursor-pointer
              py-[5px]
              px-[7.5px]
              bg-[transparent]
              rounded-lg
              shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]
              box-border
              w-[105px]
              shrink-0
              flex
              flex-row
              items-center
              justify-center
              gap-[10px]
              border-[2.5px]
              border-solid
              ${
                selectedCurrency.index === index
                  ? "border-zinc-400"
                  : "border-zinc-700"
              }
          `}
          onClick={() => handleCurrencySelect(index, currency.label)}
        >
          <Image
            width={100}
            height={100}
            className="relative w-9 h-9 shrink-0 overflow-hidden"
            alt=""
            src={currency.image}
          />
          <div className="relative text-sm font-light font-montserrat text-white text-left">
            {currency.label.toUpperCase()}
          </div>
        </button>
      ))}
    </div>
  );
}
