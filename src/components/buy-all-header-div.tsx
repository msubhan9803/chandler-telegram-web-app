import type { NextPage } from "next";

const BuyAllHeaderDiv: NextPage = () => {
  return (
    <div className="rounded-3xs bg-jet-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-col p-[9px] items-center justify-start gap-[9px] text-left text-base text-white font-montserrat">
      <div className="flex flex-col items-start justify-center gap-[9px]">
        <div className="flex flex-row items-center justify-start">
          <h4 className="m-0 relative text-[inherit] font-normal font-inherit">
            Buy All Trade
          </h4>
        </div>
        <div className="flex flex-row items-center justify-center gap-[9px]">
          <img
            className="max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/bitcoin-1-2@2x.png"
          />
          <img
            className="max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/arrowright-1@2x.png"
          />
          <img
            className="max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ethereum-1-1@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-end text-sm">
        <div className="flex flex-col items-start justify-center gap-[9px]">
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="relative font-light">Ratio:</div>
              <div className="relative font-light">Amount:</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[9px] text-base font-abel">
              <div className="relative">1:1</div>
              <div className="flex flex-row items-start justify-start gap-[9px] font-montserrat">
                <div className="relative">0.05650702</div>
                <div className="relative">BTC</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[9px] text-center">
            <div className="relative font-light">Fee:</div>
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/bitcoin-1-1.svg"
                />
                <div className="relative font-light">2.5%</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/ethereum-1-2.svg"
                />
                <div className="relative font-light">2.5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAllHeaderDiv;
