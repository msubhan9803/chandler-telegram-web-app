import React from "react";
import Filter from "../components/filter-OTC-trading";
import MainLayout from "@/layouts/main-layout";
import OtcTradingCard from "../components/otc-trading-card";

export default function OtcTrading() {
  const cardObjects = [
    {
      title: "Buy All Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: true,
    },
    {
      title: "Partial Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: false,
    },
    {
      title: "Buy All Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: true,
    },
    {
      title: "Partial Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: false,
    },
    {
      title: "Buy All Trade",
      orders: "N",
      amount: "0.05657890 BTC",
      currency1image: "https://caldera.trade/images/coins/btc.png",
      currency2image: "https://caldera.trade/images/coins/acg.png",
      isOnline: true,
    },
  ];

  return (
    <>
      <MainLayout>
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {cardObjects.map((card, index) => (
            <OtcTradingCard key={index} cardData={card} />
          ))}
        </div>
      </MainLayout>
    </>
  );
}
