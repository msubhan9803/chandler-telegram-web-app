import React, { useState } from "react";
import Button from "@/components/button";
import Image from "next/image";
import axios, { AxiosRequestConfig } from "axios";
import { useSnackbar } from "notistack";

export function MyActiveTradesCard({ cardData }: {
  cardData: {
    userId: string,
    escrowId: string,
    providingCurrency: string,
    title: string,
    cryptoOne: any,
    cryptoTwo: any,
    status: string,
  }}) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const handleSendFunds = () => {
      window.location.href = `/accept-trade?escrowId=${cardData.escrowId}&userId=${cardData.userId}`;
    };
    const handleRefundTrade = () => {
      const cancelEscrow: AxiosRequestConfig = {
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/escrow/cancel-escrow/${cardData.escrowId}`,
        params: {
          userId: cardData.userId,
        }
      };
      void axios.request(cancelEscrow)
        .then((res) => {
          enqueueSnackbar(res.data.response, { variant: "info" });
  
          setTimeout(() => {
            closeSnackbar();
          }, 2000);
        })
        .catch((err) => {
          enqueueSnackbar("Request not fullfiled successfully!", {
            variant: "error",
          });
        });
    };

  return (
    <>
      <div className="card-container p-4 border-2 bg-zinc-800 border-zinc-600 shadow shadow-neutral-500  stroke-current  rounded-md outline-white">
        <div className="bg-dark-gray font-thin text-white text-sm">
          <div className=" flex flex-wrap justify-center text-sm font-normal text-white my-3">
            {cardData.title} ({cardData.status})
          </div>
        </div>

        <div className="my-3 flex flex-row justify-center gap-1">
          <Image
            src={`https://caldera.trade/images/coins/${cardData.cryptoOne.name}.png`}
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
            src={`https://caldera.trade/images/coins/${cardData.cryptoTwo.name}.png`}
            alt=""
            className="max-w-full overflow-hidden max-h-full object-cover"
            width={32}
            height={32}
          />
        </div>

        <div className="flex flex-row">
          <Image
              src={`https://caldera.trade/images/coins/${cardData.cryptoOne.name}.png`}
              alt=""
              className="mx-1 h-5 w-5"
              width={16}
              height={16}
            />
          <p className="text-gray-300 "> Received: {cardData.cryptoOne.amountReceived} / {cardData.cryptoOne.amount}</p>
        </div>
        <div className="flex flex-row">
          <Image
              src={`https://caldera.trade/images/coins/${cardData.cryptoTwo.name}.png`}
              alt=""
              className="mx-1 h-5 w-5"
              width={16}
              height={16}
            />
          <p className="text-gray-300 "> Received: {cardData.cryptoTwo.amountReceived} / {cardData.cryptoTwo.amount}</p>
        </div>

        <div className="flex justify-between mt-3">
            <Button
              // TODO: disable if fully received from this user
              loading={['refunding','finalizing','completed','cancelled'].includes(cardData.status)}
              text={"Send " + cardData.providingCurrency.toUpperCase()}
              handleClick={handleSendFunds}
              classes="bg-green-300 hover:bg-green-300 focus:outline-none focus:ring-4 focus:ring-green-300 text-black"
            />
            <Button
              loading={['refunding','finalizing','completed','cancelled'].includes(cardData.status)}
              text="Refund Trade"
              handleClick={handleRefundTrade}
              classes="bg-red-300 hover:bg-red-300 focus:outline-none focus:ring-4 focus:ring-red-300 text-black"
            />
        </div>
      </div>
    </>
  );
}
