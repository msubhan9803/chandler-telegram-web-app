import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ReceiveAddressFormType = {
  cryptoCurrencyText?: string;
  cryptoCurrencyId?: string;

  /** Style props */
  propBoxSizing?: Property.BoxSizing;
  propWidth?: Property.Width;
};

const ReceiveAddressForm: NextPage<ReceiveAddressFormType> = ({
  cryptoCurrencyText,
  cryptoCurrencyId,
  propBoxSizing,
  propWidth,
}) => {
  const frameInputStyle: CSS.Properties = useMemo(() => {
    return {
      boxSizing: propBoxSizing,
      width: propWidth,
    };
  }, [propBoxSizing, propWidth]);

  return (
    <form className="flex flex-col items-start justify-start gap-[9px]">
      <div className="flex flex-row items-start justify-start gap-[4.5px]">
        <div className="relative text-lg font-montserrat text-white text-left">
          {cryptoCurrencyText}
        </div>
        <div className="relative text-lg font-montserrat text-white text-left">
          Receive Address
        </div>
      </div>
      <input
        className="font-montserrat text-sm bg-[transparent] rounded-8xs overflow-hidden flex flex-row p-2.5 items-start justify-center border-[2px] border-solid border-jet-black"
        type="text"
        placeholder={cryptoCurrencyId}
        style={frameInputStyle}
      />
    </form>
  );
};

export default ReceiveAddressForm;
