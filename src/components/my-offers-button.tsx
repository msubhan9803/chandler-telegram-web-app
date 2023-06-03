import React from "react";

export default function MyOffersButton({ handleClick }: any) {
  return (
    <>
      <div className="bg-dark-gray py-3 flex justify-center">
        <button
          type="button"
          onClick={handleClick}
          className="text-white  bg-neutral-700 hover:bg-neutral-600 focus:outline-none font-normal rounded-full text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:focus:ring-red-900"
        >
          Create New Offer
        </button>
      </div>
    </>
  );
}
