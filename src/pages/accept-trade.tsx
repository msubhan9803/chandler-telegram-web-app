import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import BuyAllHeaderDiv from "@/components/buy-all-header-div";
import ReceiveAddressForm from "@/components/receive-address-form";
import Button from "@/components/button";

declare global {
  interface Window {
    Telegram: any;
  }
}

const CreateTrade: NextPage = () => {
  const [state, setState] = useState({
    userId: "",
    username: "",
    chatId: "",
  });
  const [formState, setFormState] = useState({
    currency1Addr: '',
    currency2Addr: '',
  })
  const [telegram, setTelegram] = useState("");

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

    if (window.Telegram) {
      setTelegram(window.Telegram);
    }
  }, []);

  const handleOnChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  } 

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const botToken = "5741903349:AAFd3xtrymqfpcmz8P0xGPb7xvNqioLEdrA"; // Replace with your bot token

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Set up the request payload
    const payload = {
      currency1Addr: formState.currency1Addr,
      currency2Addr: formState.currency2Addr,
    };
    debugger;

    // Send a request to the Telegram bot
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: state.chatId,
        text: JSON.stringify(payload),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("Message sent successfully!");
        } else {
          alert(`Error: ${data.description}`);
        }
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      });
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="rounded-xl w-full bg-dark-gray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-y-auto flex flex-col p-[18px] items-center justify-start gap-[9px] border-[2.5px] border-solid border-zinc-700">
        <h2>DEBUG:</h2>
        {JSON.stringify(state)}
        {JSON.stringify(telegram)}
        <br />
        <hr />

        <div className="flex w-full md:w-3/4 lg:w-1/2 flex-col p-[9px] items-center justify-start gap-[18px]">
          <BuyAllHeaderDiv />
          <div className="flex flex-col items-start justify-start gap-[18px] w-full">
            <ReceiveAddressForm cryptoCurrencyText="BTC" name="currency1Addr" handleOnChange={handleOnChange} value={formState.currency1Addr} />
            <ReceiveAddressForm cryptoCurrencyText="ETH" name="currency2Addr" handleOnChange={handleOnChange} value={formState.currency2Addr} />
          </div>
          <ProgressBar striped={true} />
        </div>
        <div className="h-[116px] shrink-0 flex flex-col p-[9px] box-border items-center justify-center gap-[18px]">
          <Button text="Submit" handleClick={handleSubmit}  classes="bg-primary-main text-black" />
          <Button text="Cancel" classes="bg-secondary-main text-black" />
        </div>
      </div>
    </div>
  );
};

export default CreateTrade;
