import React, { useState } from "react";
import MyOffersCard from "@/components/my-offers-card";

export default function SimplifiedOffers() {
  const cardObjects = [
    {
      title: "Buy All Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
    },
    {
      title: "Partial Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
    },
    {
      title: "Buy All Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
    },
    {
      title: "Partial Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
    },
    {
      title: "Buy All Trade",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
    },
  ];

  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {cardObjects.map((card, index) => (
            <MyOffersCard key={index} cardData={card} />
          ))}
        </div>
    </>
  );
}
