import React, { useState } from "react";
import Image from "next/image";

export default function Otctradingcard({ cardData, openModal }: any) {
  return (
    <>
      <div className="card-container p-4 border-2 bg-zinc-800 border-zinc-600 shadow shadow-neutral-500  stroke-current  rounded-md outline-white">
        <div className="font-thin text-white text-sm ">
          <div className="flex text-end justify-end text-sm font-thin text-gray-300 ">
            {cardData.orders} : orders | 0 % Completion Rate
          </div>

          <div className=" flex flex-wrap justify-between text-sm font-normal text-white my-3">
            {cardData.title}

            <div className="flex py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={`top-0 left-7 w-2 h-2 border-none dark:border-gray-800 rounded-full ${
                  cardData.isOnline ? "bg-green-400" : "bg-red-400"
                }`}
              ></span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-start gap-[9px] pb-4">
            <Image
              className="max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={cardData.currency1image}
              width="30"
              height="30"
              loading="lazy"
            />
            <Image
              className="max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/arrowright-1@2x.png"
              width="30"
              height="30"
            />
            <Image
              className="max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={cardData.currency2image}
              width="30"
              height="30"
              loading="lazy"
            />
          </div>

          <div className="flex flex-row justify-between">
            <p className="text-gray-300 ">Ratio: 1:1</p>
            <div className="flex gap-1 text-gray-300 ">
              Fees:
              <Image
                src={cardData.currency1image}
                alt=""
                className="mx-1 h-5 w-5"
                width={16}
                height={16}
              />
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

            <div className="flex flex-row gap-1 my-2 mx-1">
              <Image
                src={cardData.currency2image}
                alt=""
                className="mx-1 h-5 w-5"
                width={16}
                height={16}
              />
              2.5%
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <button
              type="button"
              className="text-black bg-yellow-200 hover:bg-yellow-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
              onClick={openModal}
            >
              Start Trade
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
