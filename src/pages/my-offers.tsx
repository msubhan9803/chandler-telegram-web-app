import React from "react";
import MainLayout from "@/layouts/main-layout";
import MyOffersCard from "@/components/my-offers-card";
import OfferButton from "@/components/my-offers-button";

export default function MyOffers() {
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
      <MainLayout>
        <OfferButton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {cardObjects.map((card, index) => (
            <MyOffersCard key={index} cardData={card} />
          ))}
        </div>
      </MainLayout>
    </>
  );
}
