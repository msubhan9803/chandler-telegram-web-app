import React from "react";
import Image from "next/image";
import Spinner from "./spinner";

export default function CopyCreateTradeCurrency({
  id,
  selectedCurrency,
  currencyList,
  handleCurrencySelect,
  handleTradingSubmit,
  loading,
  showLoader,
}: {
  id: any;
  selectedCurrency: any;
  currencyList: Array<{
    image: string;
    label: string;
  }>;
  handleCurrencySelect: (index: number, currency: string) => void;
  handleTradingSubmit: (id: string) => void;
  loading: boolean;
  showLoader: boolean;
}) {
  return (
    <>
      <div className="relative rounded-t-3xs rounded-b-none bg-caldera-l-blue w-full flex flex-col py-[9px] px-2.5 box-border items-start justify-start text-left text-sm text-white font-montserrat">
        <div className="flex flex-col items-center justify-center gap-[18px] m-auto">
          {currencyList?.length === 0 ? (
            <div className="h-96 flex justify-center items-center m-auto">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-gray-600 pr-2">
              {currencyList?.map((currency, index) => (
                <button
                  key={index}
                  className={`
                      ${
                        selectedCurrency.index === index
                          ? "bg-zinc-600"
                          : "bg-none"
                      }
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
          )}
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
    </>
  );
}
