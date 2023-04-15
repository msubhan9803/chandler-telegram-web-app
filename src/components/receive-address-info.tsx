import React, { useRef, useEffect } from "react";
import dynamic from 'next/dynamic';

const QRCodeComponent = dynamic(() => import('@/components/qrcode-component'), {
  ssr: false,
});

type PropTypes = {
  amount: string;
  currency: string;
  address: string;
};

export default function ReceiveAddressInfo({
  amount,
  currency,
  address,
}: PropTypes) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        <span className="text-slate-100 text-bold mr-2">Please send</span>
        <span className="text-slate-200">
          {amount} {currency}
        </span>
      </div>
      <span className="text-white text-bold text-center mt-2">{address}</span>

      <QRCodeComponent text={address} />
    </div>
  );
}
