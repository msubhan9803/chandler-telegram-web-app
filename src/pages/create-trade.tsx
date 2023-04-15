import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import CreateTradeCurrency from "@/components/create-trade-currency";

export default function CreateTrade() {
  const [disclosures, setDisclosures] = useState([
    {
      id: "disclosure-panel-1",
      isOpen: true,
      buttonText: "Trading",
      panelText:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      id: "disclosure-panel-2",
      isOpen: false,
      buttonText: "Seeking",
      panelText: "No.",
    },
  ]);

  const handleClick = (id: any) => {
    setDisclosures(
      disclosures.map((d) =>
        d.id === id ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: false }
      )
    );
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl p-2 space-y-2 bg-[#1e69a0]">
      {disclosures.map(({ id, isOpen, buttonText, panelText }) => (
        <React.Fragment key={id}>
          <button
            className="flex flex-col w-full rounded-3xl bg-[#1c1c1c] px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
            onClick={() => handleClick(id)}
            aria-expanded={isOpen}
            {...(isOpen && { "aria-controls": id })}
          >
            <div className="relative font-medium m-auto">{buttonText}:</div>
            <div className="relative box-border m-auto w-3/4 my-1 h-px shrink-0 border-t-[1px] border-solid border-gray-600" />
            <span className="m-auto">Select coin</span>
          </button>
          {isOpen && (
            <div className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-[#1c1c1c] rounded-3xl">
              {/* {panelText} */}
              <CreateTradeCurrency />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
