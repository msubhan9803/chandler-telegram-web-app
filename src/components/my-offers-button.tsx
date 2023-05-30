import React from "react";

export default function myoffersbutton() {
  return (
    <>
      <div className="bg-dark-gray py-3 flex justify-center">
        <button
          type="button"
          className="text-white  bg-neutral-700 hover:bg-red-300 focus:outline-none focus:ring-4 focus:ring-red-300 font-normal rounded-full text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:focus:ring-red-900"
        >
          Create New Offer
        </button>
      </div>
    </>
  );
}
