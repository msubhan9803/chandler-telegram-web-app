import React from "react";
import Spinner from "./spinner";

type PropTypes = {
  text?: string;
  classes?: string;
  handleClick?: (e: any) => void;
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({ text, classes, handleClick, loading, disabled }: PropTypes) {
  return (
    <button disabled={disabled ?? loading} type='button' onClick={handleClick} className={`${classes} cursor-pointer [border:none] p-2.5 rounded-3xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-auto flex flex-row box-border items-start justify-center`} style={
      disabled ? { opacity: 0.2 } : {}
    }>
      <span className="relative font-medium font-montserrat text-left flex items-center">
        {text}

        {loading && <Spinner />}
      </span>
    </button>
  );
}
