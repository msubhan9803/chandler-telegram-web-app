import React from "react";

type PropType = {
  progress: number;
};

export default function Progressbar({ progress }: PropType) {
  const getProgressText = () => {
    if (progress === 0) {
      return "Not Started";
    } else if (progress === 50) {
      return "In Progress";
    } else {
      return "Completed";
    }
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="w-full m-auto bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-gradient-to-r from-teal-400 to-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{
            width: `${progress}%`,
            height: "15px",
          }}
        ></div>
      </div>

      <span className="text-white mt-4">{getProgressText()}</span>
    </div>
  );
}
