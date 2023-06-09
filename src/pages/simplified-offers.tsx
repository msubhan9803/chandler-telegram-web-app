import React, { useEffect, useState } from "react";
import MyOffersCard from "@/components/my-offers-card";
import axios, { AxiosRequestConfig } from "axios";

const UserActiveTrades = (state: { userId: string}) => {
  const [userActiveTradeOffers, setUserActiveTrades] = useState([] as { tradeId: string; cryptoOne: { amount: string; name: string; }; cryptoTwo: { amount: string; name: string; }; tradeType: "take-all" | "take-some"}[]);
  
    useEffect(() => {
      if(!state.userId || state.userId === "") return;
      // Set up the request payload
      const getUserTradesListingsConfig: AxiosRequestConfig = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/get-active-trades-by-user`,
        data: {
          userId: state.userId,
        }
      };
      void axios.request<{response: { tradeId: string; cryptoOne: { amount: string; name: string; }; cryptoTwo: { amount: string; name: string; }; tradeType: "take-all" | "take-some"}[]}>(getUserTradesListingsConfig)
      .then(escrowResponseData => {
        console.log(escrowResponseData.data)
        setUserActiveTrades(escrowResponseData.data.response);
      })
      .catch(error => {
        // TODO: handle error
      })
      }, [state.userId]);
      if (!userActiveTradeOffers) return <div>Loading...</div>;

      // return userTradeOffers map of MyOffersCard
      return (
        <>
              {userActiveTradeOffers.map((tradeOffer) => (
                <MyOffersCard // TODO: Change to MyTradesCard
                key={tradeOffer.tradeId}
                cardData={{
                  title: tradeOffer.tradeType === "take-all" ? "Buy All Trade" : "Partial Trade",
                  amount: tradeOffer.cryptoOne.amount,
                  currency1image: `https://caldera.trade/images/coins/${tradeOffer.cryptoOne.name}.png`,
                  currency2image: `https://caldera.trade/images/coins/${tradeOffer.cryptoTwo.name}.png`,
                }} />
              ))}
        </>
        );
  };

const UserTrades = (state: { userId: string}) => {
  const [userTradeOffers, setUserTrades] = useState([] as { tradeId: string; cryptoOne: { amount: string; name: string; }; cryptoTwo: { amount: string; name: string; }; tradeType: "take-all" | "take-some"}[]);
  
    useEffect(() => {
      if(!state.userId || state.userId === "") return;
      // Set up the request payload
      const getUserTradesListingsConfig: AxiosRequestConfig = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/trades/get-trade-list`,
        data: {
          userId: state.userId,
        }
      };
      void axios.request<{response: { tradeId: string; cryptoOne: { amount: string; name: string; }; cryptoTwo: { amount: string; name: string; }; tradeType: "take-all" | "take-some"}[]}>(getUserTradesListingsConfig)
      .then(escrowResponseData => {
        setUserTrades(escrowResponseData.data.response);
      })
      .catch(error => {
        // TODO: handle error
      })
      }, [state.userId]);
      if (!userTradeOffers) return <div>Loading...</div>;


      // return userTradeOffers map of MyOffersCard
      return (
        <>
              {userTradeOffers.map((tradeOffer) => (
                <MyOffersCard
                key={tradeOffer.tradeId}
                cardData={{
                  title: tradeOffer.tradeType === "take-all" ? "Buy All Trade" : "Partial Trade",
                  amount: tradeOffer.cryptoOne.amount,
                  currency1image: `https://caldera.trade/images/coins/${tradeOffer.cryptoOne.name}.png`,
                  currency2image: `https://caldera.trade/images/coins/${tradeOffer.cryptoTwo.name}.png`,
                }} />
              ))}
        </>
        );
  };

export default function SimplifiedOffers() {
  const [state, setState] = useState({
    userId: "",
    username: "",
    chatId: "",
  });
  useEffect(() => {
    if (window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);

      const userId = urlParams.get("userId") as string;
      const username = urlParams.get("username") as string;
      const chatId = urlParams.get("chatId") as string;

      setState({
        userId,
        username,
        chatId,
      });
    }
  }, []);
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
          {UserActiveTrades(state)}
          {UserTrades(state)}
        </div>
    </>
  );
}
