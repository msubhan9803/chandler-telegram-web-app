import React, { useState } from "react";
import Image from "next/image";

// import { user } from 'react-icons/heroicons-outline';

export default function myofferscard({ cardData }) {
  const [isOnline, setIsOnline] = useState(false);

  const handleOnlineClick = () => {
    setIsOnline(true);
  };
  return (
    <>

    {/* <OfferButton/> */}
      <div className="py-1 bg-neutral-700 w-full"></div>

      <div className="mx-8 md:mx-4 lg:mx-2 my-1">
        <div className="bg-dark-gray font-thin text-white text-sm">
          <div className=" flex flex-row justify-center text-sm font-normal text-white my-3">
            {cardData.title}
          </div>
        </div>

        <div className="my-3 flex flex-row justify-center">
          <Image
            src={cardData.currency1image}
            alt=""
            className="mx-2"
            width={32}
            height={32}
          />
          <Image src={cardData.currency2image} alt="" width={32} height={32} />
        </div>

        <div className="flex flex-row justify-between font-thin">
          {" "}
          <p className="text-gray-300  ">Ratio: 1:1</p>
          <div className="flex gap-1 text-gray-300">
            Fess:{" "}
            <Image
              src={cardData.currency1image}
              alt=""
              className=""
              width={24}
              height={24}
            />{" "}
            2.5%
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row ">
            <p className="flex flex-row font-thin text-sm text-gray-300 ">
              Amount:{" "}
            </p>
            <p className="ml-2 font-normal text-white text-sm">
              {" "}
              {cardData.amount}
            </p>
          </div>

          <div className="flex flex-row gap-1 text-gray-300">
            {" "}
            <Image
              src={cardData.currency1image}
              alt=""
              width={24}
              height={24}
            />
            2.5%
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="button"
            className="text-black bg-red-300 hover:bg-red-300 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:focus:ring-red-900"
          >
            Remove
          </button>
        </div>
        {/* <p>Users: {cardData.numUsers}</p>

          <p>{cardData.isOnline ? "Online" : "Offline"}</p> */}
      </div>
    </>
  );
}
