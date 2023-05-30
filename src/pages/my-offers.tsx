import React from 'react'
import MainLayout from "@/layouts/main-layout";
import Card from '../components/my-offers-card';  
import OfferButton from '../components/my-offers-button'


export default function MyOffers() {
  const cardObjects = [
    { title: 'Buy All Trade',  amount: '0.05657890 BTC', Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: 'https://caldera.trade/images/coins/btc.png' },
    { title: 'Partial Trade', amount: '0.05657890 BTC', Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: '/path/to/image1.png'  },
    { title: 'Buy All Trade', amount: '0.05657890 BTC',  Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: '/path/to/image1.png' },
    { title: 'Partial Trade',  amount: '0.05657890 BTC', Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: '/path/to/image1.png' },
    { title: 'Buy All Trade',  amount: '0.05657890 BTC', Currency1image: 'https://caldera.trade/images/coins/btc.png', Currency2image: '/path/to/image1.png'}
    // Add more objects as needed
  ]
  return (
    <>
      <MainLayout>
        {" "}
        
<OfferButton/>
        <div className='otcTrading'>
      {cardObjects.map((card, index) => (
        <Card key={index} cardData={card} />
      ))}
    </div>
        

      </MainLayout>
    </>
  )
}
