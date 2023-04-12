import React from "react";

type PropTypes = {
  text: string;
  classes: string;
}

export default function Button({ text, classes }: PropTypes) {
  return (
    <button className={`${classes} cursor-pointer [border:none] p-2.5 bg-caldera-green rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[110px] flex flex-row box-border items-start justify-center`}>
      <span className="relative font-medium font-montserrat text-left">
        {text}
      </span>
    </button>
  );
}
