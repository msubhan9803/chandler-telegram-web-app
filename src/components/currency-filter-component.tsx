import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Script from "next/script";
import Image from "next/image";
import Spinner from "@/components/spinner";

export default function CurrencyFilterComponent({
  currencyFilter,
  setCurrencyFilter,
  isCurrencyFilterOpen,
  setIsCurrencyFilterOpen,
}: any) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [currencyList, setCurrencyList] = useState([]);

  const handleLookingForCurrencySelect = (index: number, currency: string) => {
    setCurrencyFilter({
      index,
      currency,
    });
  };

  const handleOfferingCurrencySelect = (index: number, currency: string) => {
    setCurrencyFilter({
      index,
      currency,
    });
  };

  const [disclosures, setDisclosures] = useState([
    {
      id: "disclosure-panel-1",
      isOpen: true,
      buttonText: "Looking For",
      handleCurrencySelect: handleLookingForCurrencySelect,
      type: "looking_for",
    },
    {
      id: "disclosure-panel-2",
      isOpen: false,
      buttonText: "Offering",
      handleCurrencySelect: handleOfferingCurrencySelect,
      type: "offering",
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
    setIsCurrencyFilterOpen(!isCurrencyFilterOpen);
  };

  const handleClearState = () => {
    setCurrencyFilter({
      currencyOne: "",
      currencyTwo: "",
    });

    handleDisclosuerClick("disclosure-panel-1");
  };

  const handleTradingSubmit = async (id: string) => {
    if (id === "disclosure-panel-1") {
      if (currencyFilter.currencyOne === "") {
        enqueueSnackbar("Please select Looking for currency", {
          variant: "error",
        });
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
      if (currencyFilter.currencyTwo === "") {
        enqueueSnackbar("Please select Offering currency", {
          variant: "error",
        });
        return;
      }

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        enqueueSnackbar("Submitted!", { variant: "success" });
        handleClearState();

        closeSnackbar();
        handleClose();
      }, 2000);
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

      <div className="mx-auto w-full max-w-md rounded-3xl p-2 space-y-2">
        {disclosures.map(
          ({ id, isOpen, buttonText, handleCurrencySelect, type }, index) => (
            <>
              <button
                className="flex flex-col w-full rounded-3xl bg-[#1c1c1c] px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
                onClick={() => handleDisclosuerClick(id)}
                aria-expanded={isOpen}
                {...(isOpen && { "aria-controls": id })}
              >
                <div className="relative font-medium m-auto">{buttonText}:</div>
                <div className="relative box-border m-auto w-3/4 my-1 h-px shrink-0 border-t-[1px] border-solid border-gray-600" />
                <span className="m-auto">Select coin</span>
              </button>
              {isOpen && (
                <div className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-[#1c1c1c] rounded-3xl">
                  <div className="relative rounded-t-3xs rounded-b-none bg-caldera-l-blue w-full flex flex-col py-[9px] px-2.5 box-border items-start justify-start text-left text-sm text-white font-montserrat">
                    <div className="flex flex-col items-center justify-center gap-[18px] m-auto">
                      {currencyList.length === 0 ? (
                        <div className="h-96 flex justify-center items-center m-auto">
                          <Spinner />
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-gray-600 pr-2">
                          {currencyList.map((currency: any, index) => (
                            <button
                              key={index}
                              className={`
                                ${
                                  currencyFilter.currencyOne === currency
                                    ? "bg-zinc-600"
                                    : "bg-none"
                                }
                                cursor-pointe
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
                                  currencyFilter.currencyOne === currency
                                    ? "border-zinc-400"
                                    : "border-zinc-700"
                                }
                              `}
                              onClick={() =>
                                handleCurrencySelect(index, currency.label)
                              }
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
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )
        )}
      </div>
    </>
  );
}
