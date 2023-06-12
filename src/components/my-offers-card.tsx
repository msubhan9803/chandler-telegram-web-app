import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import axios, { AxiosRequestConfig } from "axios";
import { useSnackbar } from "notistack";

export default function MyOffersCard({ cardData }: any) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const handleRemoveTrade = () => {
      const cancelEscrow: AxiosRequestConfig = {
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/remove-trade/${cardData.trade_id}`,
        params: {
          userId: cardData.userId,
        }
      };
      void axios.request(cancelEscrow)
        .then((res) => {
          enqueueSnackbar(res.data.response, { variant: "success" });

          setTimeout(() => {
            closeSnackbar();
          }, 2000);
        })
        .catch((err) => {
          enqueueSnackbar("Trade not removed successfully!", {
            variant: "error",
          });
        });
    };

  return (
    <>
      <div className="card-container p-4 border-2 bg-zinc-800 border-zinc-600 shadow shadow-neutral-500  stroke-current  rounded-md outline-white">
        <div className="bg-dark-gray font-thin text-white text-sm">
          <div className=" flex flex-wrap justify-center text-sm font-normal text-white my-3">
            {cardData.title}
          </div>
        </div>

        <div className="my-3 flex flex-row justify-center gap-1">
          <Image
            src={cardData.currency1image}
            alt=""
            className="max-w-full overflow-hidden max-h-full object-cover"
            width={32}
            height={32}
          />
          <Image
            className="max-w-full overflow-hidden max-h-full object-cover "
            alt=""
            src="/arrowright-1@2x.png"
            width="30"
            height="30"
          />
          <Image
            src={cardData.currency2image}
            alt=""
            className="max-w-full overflow-hidden max-h-full object-cover"
            width={32}
            height={32}
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

          <div className="flex flex-row gap-1  text-gray-300">
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
        <Button
              text="Remove"
              loading={['refunding','finalizing','completed','cancelled'].includes(cardData.status)}
              handleClick={handleRemoveTrade}
              classes="bg-red-300 hover:bg-red-300 focus:outline-none focus:ring-4 focus:ring-red-300 text-black"
            />
        </div>
      </div>
    </>
  );
}
