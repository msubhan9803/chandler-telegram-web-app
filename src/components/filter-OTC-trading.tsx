import React from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";

export default function FilterOTCtrading({
  handleCurrencyFilterClose,
  toggleTypeAmountFilterClose,
}: any) {
  return (
    <>
      <div className="p-4">
        <div
          className="flex items-center justify-center rounded-md"
          role="group"
        >
          <button
            type="button"
            onClick={handleCurrencyFilterClose}
            className="px-3 py-2 text-sm font-normal text-white bg-zinc-800 border-1 border-gray-800 rounded-l-lg drop-shadow-lg"
          >
            Looking For:
            <br />
            <div className="text-gray-300 font-thin"> Select Coins(s)</div>
          </button>
          <div className="w-[0.75px] bg-neutral-800"></div>
          <button
            type="button"
            onClick={handleCurrencyFilterClose}
            className="ml-1 px-3 py-2 text-sm font-normal text-white bg-zinc-800 border-1 border-gray-800 rounded-r-lg drop-shadow-lg"
          >
            Offerings:
            <br />
            <div className="text-gray-300 font-thin"> Select Coins(s)</div>
          </button>

          <button
            onClick={toggleTypeAmountFilterClose}
            className="ml-8 p-2 text-white rounded-full bg-zinc-800 border-1 drop-shadow-lg"
          >
            <FunnelIcon className="h-6 m-auto" />
          </button>
        </div>
      </div>
    </>
  );
}
