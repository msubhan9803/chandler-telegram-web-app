import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Script from "next/script";
import Image from "next/image";
import Spinner from "@/components/spinner";

export default function CurrencyFilterComponent({
  isCurrencyFilterOpen,
  setIsCurrencyFilterOpen,
  handleFilterUpdate,
}: any) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [currencyList, setCurrencyList] = useState([]);
  const tradeTypes = {
    lookingFor: "looking_for",
    offering: "offering",
  };
  const [currencyFilterChild, setCurrencyFilterChild] = useState({
    currencyOne: "",
    currencyTwo: "",
  });

  const handleCurrencySelect = (type: string, currency: string) => {
    if (tradeTypes.lookingFor === type) {
      setCurrencyFilterChild({
        ...currencyFilterChild,
        currencyOne: currency,
      });
    } else {
      setCurrencyFilterChild({
        ...currencyFilterChild,
        currencyTwo: currency,
      });
    }
  };

  const getCurrencyOne = () => currencyFilterChild.currencyOne;
  const getCurrencyTwo = () => currencyFilterChild.currencyTwo;

  const getCurrency = (type: string) => {
    if (tradeTypes.lookingFor === type) {
      return getCurrencyOne();
    } else {
      return getCurrencyTwo();
    }
  };

  const [disclosures, setDisclosures] = useState([
    {
      id: "disclosure-panel-1",
      isOpen: true,
      buttonText: "Looking For",
      type: tradeTypes.lookingFor,
    },
    {
      id: "disclosure-panel-2",
      isOpen: false,
      buttonText: "Offering",
      type: tradeTypes.offering,
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
    setCurrencyFilterChild({
      currencyOne: "",
      currencyTwo: "",
    });

    handleDisclosuerClick("disclosure-panel-1");
  };

  const handleTradingSubmit = async (id: string) => {
    if (id === "disclosure-panel-1") {
      if (currencyFilterChild.currencyOne === "") {
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
      if (currencyFilterChild.currencyTwo === "") {
        enqueueSnackbar("Please select Offering currency", {
          variant: "error",
        });
        return;
      }

      handleFilterUpdate(currencyFilterChild);
      handleClearState();
      handleClose();
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

      <div className="mx-auto w-full lg:max-w-md rounded-3xl p-2 space-y-2">
        {disclosures.map(({ id, isOpen, buttonText, type }, index) => (
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
                                  getCurrency(type) === currency.label
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
                                  getCurrency(type) === currency.label
                                    ? "border-zinc-400"
                                    : "border-zinc-700"
                                }
                              `}
                            onClick={() =>
                              handleCurrencySelect(type, currency.label)
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
        ))}
      </div>
    </>
  );
}
