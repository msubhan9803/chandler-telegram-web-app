import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ReceiveAddressFormType = {
  name?: string;
  cryptoCurrencyText?: string;
  value: string;
  /** Style props */
  propBoxSizing?: Property.BoxSizing;
  propWidth?: Property.Width;
  handleOnChange?: (e: any) => void;
};

const ReceiveAddressForm: NextPage<ReceiveAddressFormType> = ({
  name,
  cryptoCurrencyText,
  value,
  propBoxSizing,
  propWidth,
  handleOnChange
}) => {
  const frameInputStyle: CSS.Properties = useMemo(() => {
    return {
      boxSizing: propBoxSizing,
      width: propWidth,
    };
  }, [propBoxSizing, propWidth]);

  return (
    <div className="flex flex-col items-start justify-start gap-[9px] w-full">
      <div className="flex flex-row items-start justify-start gap-[4.5px]">
        <div className="relative text-lg font-montserrat text-white text-left">
          {cryptoCurrencyText}
        </div>
        <div className="relative text-lg font-montserrat text-white text-left">
          Receive Address
        </div>
      </div>
      <input
        className="text-white font-montserrat text-sm bg-[transparent] rounded-8xs overflow-hidden flex flex-row p-2.5 items-start justify-center border-[2px] border-solid border-zinc-700 w-full rounded-lg"
        type="text"
        name={name}
        value={value}
        style={frameInputStyle}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default ReceiveAddressForm;
