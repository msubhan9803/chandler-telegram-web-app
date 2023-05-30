import React from "react";
import Filter from '../components/filter-OTC-trading'
import MainLayout from "@/layouts/main-layout";
import Card from '../components/otc-trading-card';  
export default function OtcTrading() {

  const cardObjects = [
    { title: 'Buy All Trade', orders: 'N', amount: '0.05657890 BTC', Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: 'https://caldera.trade/images/coins/btc.png', isOnline: true },
    { title: 'Partial Trade', orders: 'N', amount: '0.05657890 BTC', Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: '/path/to/image1.png', isOnline: false },
    { title: 'Buy All Trade', orders: 'N', amount: '0.05657890 BTC',  Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: '/path/to/image1.png', isOnline: true },
    { title: 'Partial Trade', orders: 'N', amount: '0.05657890 BTC', Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: '/path/to/image1.png', isOnline: false },
    { title: 'Buy All Trade', orders: 'N', amount: '0.05657890 BTC',  Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: '/path/to/image1.png', isOnline: true }
    // Add more objects as needed
  ]
  return (
    <>
      <MainLayout>
        {" "}
        <Filter />

        <div className='otcTrading'>
      {cardObjects.map((card, index) => (
        <Card key={index} cardData={card} />
      ))}
    </div>
        

      </MainLayout>
    </>
  );
}
