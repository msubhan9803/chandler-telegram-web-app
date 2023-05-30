import React from "react";

export default function filterOTCtrading() {
  return (
    <>
      <div className="bg-dark-gray p-4">
        <div className="flex items-center justify-center rounded-md shadow-sm shadow-gray-950" role="group">
          <button
            type="button"
            className="px-3 py-2 text-sm font-normal text-white bg-neutral-700 border-1 border-gray-800 rounded-l-lg  focus:z-10  "
          >
            Looking For:<br/>
            <div className="text-gray-300 font-thin"> Select Coins(s)</div>
           
          </button>
         <div className="w-1 bg-neutral-800"></div>
          <button
            type="button"
            className="px-3 py-2 text-sm font-normal text-white bg-neutral-700 border-1 border-gray-800 rounded-r-lg  "
          >
            Offerings:<br/>
            <div className="text-gray-300 font-thin"> Select Coins(s)</div>
           
          </button>
        </div>
      </div>
    </>
  );
}
