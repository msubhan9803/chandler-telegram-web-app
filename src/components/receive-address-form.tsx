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
  error: string;
  disabled: boolean;
};

const ReceiveAddressForm: NextPage<ReceiveAddressFormType> = ({
  name,
  cryptoCurrencyText,
  value,
  propBoxSizing,
  propWidth,
  error,
  disabled,
  handleOnChange,
}) => {
  const frameInputStyle: CSS.Properties = useMemo(() => {
    return {
      boxSizing: propBoxSizing,
      width: propWidth,
    };
  }, [propBoxSizing, propWidth]);

  return (
    <div className="flex flex-col items-start justify-start gap-[9px] w-full">
      <input
        className={`
        text-white
          font-montserrat
          text-sm
          bg-[transparent]
          disabled:bg-zinc-800
          rounded-8xs
          overflow-hidden
          flex
          flex-row
          p-2.5
          items-start
          justify-center
          border-[2px]
          border-solid
          w-full
          rounded-lg
          ${!error ? 'border-zinc-700' : 'border-red-500'}
        `}
        type="text"
        name={name}
        value={value}
        style={frameInputStyle}
        onChange={handleOnChange}
        disabled={disabled}
      />

      <span className="text-red-500">{error}</span>
    </div>
  );
};

export default ReceiveAddressForm;
