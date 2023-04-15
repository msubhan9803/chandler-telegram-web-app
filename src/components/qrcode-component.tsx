// components/QRCodeComponent.js
import React, { useEffect, useRef } from "react";

const QRCodeComponent = ({ text }: { text: string }) => {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (text) {
      import("qr-code-styling").then((QRCodeStyling: any) => {
        if (qrCodeRef.current) {
          qrCodeRef.current.innerHTML = "";
        }

        const qrCode = new QRCodeStyling.default({
          width: 300,
          height: 300,
          data: text,
          margin: 0,
          qrOptions: {
            typeNumber: 0,
            mode: "Byte",
            errorCorrectionLevel: "Q",
          },
          imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
          dotsOptions: {
            type: "square",
            color: "#6a1a4c",
            gradient: {
              type: "linear",
              rotation: 1.5707963267948966,
              colorStops: [
                { offset: 0, color: "#55d1d3" },
                { offset: 1, color: "#308cf1" },
              ],
            },
          },
          backgroundOptions: { color: "#ffffff" },
          image: "",
          dotsOptionsHelper: {
            colorType: { single: true, gradient: false },
            gradient: {
              linear: true,
              radial: false,
              color1: "#6a1a4c",
              color2: "#6a1a4c",
              rotation: "0",
            },
          },
          cornersSquareOptions: {
            type: "square",
            color: "#000000",
            gradient: {
              type: "linear",
              rotation: 1.5707963267948966,
              colorStops: [
                { offset: 0, color: "#55d1d3" },
                { offset: 1, color: "#2f8ef4" },
              ],
            },
          },
          cornersSquareOptionsHelper: {
            colorType: { single: true, gradient: false },
            gradient: {
              linear: true,
              radial: false,
              color1: "#000000",
              color2: "#000000",
              rotation: "0",
            },
          },
          cornersDotOptions: {
            type: "square",
            color: "#3ec3e5",
            gradient: {
              type: "linear",
              rotation: 0,
              colorStops: [
                { offset: 0, color: "#55d1d3" },
                { offset: 1, color: "#308ef4" },
              ],
            },
          },
          cornersDotOptionsHelper: {
            colorType: { single: true, gradient: false },
            gradient: {
              linear: true,
              radial: false,
              color1: "#000000",
              color2: "#000000",
              rotation: "0",
            },
          },
          backgroundOptionsHelper: {
            colorType: { single: true, gradient: false },
            gradient: {
              linear: true,
              radial: false,
              color1: "#ffffff",
              color2: "#ffffff",
              rotation: "0",
            },
          },
        });

        qrCode.append(qrCodeRef.current as any);
      });
    }
  }, [text]);

  return (
    <div className="p-1 mt-4 bg-white m-auto">
        <div ref={qrCodeRef} />
    </div>
  );
};

export default QRCodeComponent;
