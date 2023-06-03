import React from "react";
import Spinner from "./spinner";

type PropTypes = {
  text?: string;
  classes?: string;
  handleClick?: (e: any) => void;
  loading?: boolean;
}

export default function Button({ text, classes, handleClick, loading }: PropTypes) {
  return (
    <button disabled={loading} type='button' onClick={handleClick} className={`${classes} cursor-pointer [border:none] p-2.5 rounded-3xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-auto flex flex-row box-border items-start justify-center`}>
      <span className="relative font-medium font-montserrat text-left flex items-center">
        {text}

        {loading && <Spinner />}
      </span>
    </button>
  );
}
