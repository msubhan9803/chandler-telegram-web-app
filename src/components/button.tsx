import React from "react";

type PropTypes = {
  text: string;
  classes: string;
  handleClick?: (e: any) => void;
}

export default function Button({ text, classes, handleClick }: PropTypes) {
  return (
    <button type='button' onClick={handleClick} className={`${classes} cursor-pointer [border:none] p-2.5 bg-caldera-green rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[110px] flex flex-row box-border items-start justify-center`}>
      <span className="relative font-medium font-montserrat text-left">
        {text}
      </span>
    </button>
  );
}
