import React from "react";

export default function otctradeguidecard({cardData}) {
  return (
    <>
    <div className=" bg-neutral-700 h-3 w-full mb-2"></div>

      <div className=" bg-dark-gray text-white mx-8 text-justify text-sm">
        
          <h3 className="flex justify-center pb-3 text-sm">{cardData.title}</h3>
          <p className="text-gray-200 font-thin text-sm">{cardData.description}</p>
        </div>
        
    </>
  );
}
