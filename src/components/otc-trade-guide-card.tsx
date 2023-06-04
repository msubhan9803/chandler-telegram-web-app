import React from "react";

export default function OtcTradeGuideCard({ cardData }: any) {
  return (
    <>
      <div className="card-container p-3 border-2 bg-zinc-800 border-zinc-600 shadow shadow-neutral-500 stroke-current rounded-md outline-white text-white mx-8 mt-4 text-justify text-sm">
        <h3 className="flex justify-center pb-3 text-sm">{cardData.title}</h3>
        <p className="text-gray-200 font-thin text-sm">
          {cardData.description}
        </p>
      </div>
    </>
  );
}
