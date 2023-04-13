import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import BuyAllHeaderDiv from "@/components/buy-all-header-div";
import ReceiveAddressForm from "@/components/receive-address-form";
import Button from "@/components/button";

const CreateTrade: NextPage = () => {
  const [state, setState] = useState({
    userId: '',
    name: '',
    username: '',
    languageCode: '',
    queryId: '',
  });
  useEffect(() => {
    if (window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);
  
      const userId = urlParams.get("user_id") as string;
      const name = urlParams.get("name") as string;
      const username = urlParams.get("username") as string;
      const languageCode = urlParams.get("language_code") as string;
      const queryId = urlParams.get("query_id") as string;
  
      console.log(userId, name, username, languageCode, queryId);
      setState({
        userId,
        name,
        username,
        languageCode,
        queryId,
      });
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="rounded-xl w-full bg-dark-gray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-y-auto flex flex-col p-[18px] items-center justify-start gap-[9px] border-[2.5px] border-solid border-zinc-700">
        {JSON.stringify(state)}

        <div className="flex w-full md:w-3/4 lg:w-1/2 flex-col p-[9px] items-center justify-start gap-[18px]">
          <BuyAllHeaderDiv />
          <div className="flex flex-col items-start justify-start gap-[18px] w-full">
            <ReceiveAddressForm cryptoCurrencyText="BTC" />
            <ReceiveAddressForm cryptoCurrencyText="ETH" />
          </div>
          <ProgressBar striped={true} />
        </div>
        <div className="h-[116px] shrink-0 flex flex-col p-[9px] box-border items-center justify-center gap-[18px]">
          <Button text="Submit" classes="bg-primary-main text-black" />
          <Button text="Cancel" classes="bg-secondary-main text-black" />
        </div>
      </div>
    </div>
  );
};

export default CreateTrade;
