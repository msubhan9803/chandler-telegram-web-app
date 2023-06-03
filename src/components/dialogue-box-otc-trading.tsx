import React from "react";

export default function DialogBoxOtcTrading({ onClose }: any) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-gray-800 w-full h-full p-4">
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
