import type { NextPage } from "next";
import { ProgressBar } from "react-bootstrap";
import BuyAllHeaderDiv from "../components/buy-all-header-div";
import ReceiveAddressForm from "../components/receive-address-form";

const CreateTrade: NextPage = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="rounded-xl bg-dark-gray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[330px] overflow-y-auto flex flex-col p-[18px] items-center justify-start gap-[9px] border-[2.5px] border-solid border-jet-black">
        <div className="flex flex-col p-[9px] items-center justify-start gap-[18px]">
          <BuyAllHeaderDiv />
          <div className="flex flex-col items-start justify-start gap-[18px]">
            <ReceiveAddressForm
              cryptoCurrencyText="BTC"
              cryptoCurrencyId="ea5fd50e-debc-4184-ba16-6514a00fc9dd"
            />
            <ReceiveAddressForm
              cryptoCurrencyText="ETH"
              cryptoCurrencyId="79616a8f-ed2a-4e84-9a17-d0712195683f"
              propBoxSizing="border-box"
              propWidth="303px"
            />
          </div>
          <ProgressBar striped={true} />
        </div>
        <div className="h-[116px] shrink-0 flex flex-col p-[9px] box-border items-center justify-center gap-[18px]">
          <button className="cursor-pointer [border:none] p-2.5 bg-caldera-green rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[110px] flex flex-row box-border items-start justify-center">
            <div className="relative text-base font-medium font-montserrat text-black text-left">
              Submit
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-2.5 bg-caldera-pastel-red rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[110px] flex flex-row box-border items-start justify-center">
            <div className="relative text-base font-medium font-montserrat text-black text-left inline-block w-14 shrink-0">
              Cancel
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTrade;
