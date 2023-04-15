import Image from 'next/image';

export default function CreateTradeCurrency() {
  return (
    <div className="relative rounded-t-3xs rounded-b-none bg-caldera-l-blue w-full flex flex-col py-[9px] px-2.5 box-border items-start justify-start text-left text-sm text-white font-montserrat">
      <div className="flex flex-col items-center justify-center gap-[18px]">
        <div className="rounded-xl bg-dark-gray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col p-[9px] items-center justify-start gap-[18px]">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <button className="cursor-pointer py-[5px] px-[7.5px] bg-[transparent] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[105px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[2.5px] border-solid border-jet-black">
                <Image
                    width={100}
                    height={100}
                  className="relative w-9 h-9 shrink-0 overflow-hidden"
                  alt=""
                  src="/btc.svg"
                />
                <div className="relative text-sm font-light font-montserrat text-white text-left">
                  BTC
                </div>
              </button>
              <button className="cursor-pointer py-[5px] px-[7.5px] bg-[transparent] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[105px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[2.5px] border-solid border-jet-black">
                <Image
                    width={100}
                    height={100}
                  className="relative w-9 h-9 shrink-0 overflow-hidden"
                  alt=""
                  src="/eth.svg"
                />
                <div className="relative text-sm font-light font-montserrat text-white text-left">
                  ETH
                </div>
              </button>
              <button className="cursor-pointer p-[5px] bg-[transparent] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[105px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[2.5px] border-solid border-jet-black">
                <Image
                    width={100}
                    height={100}
                  className="relative w-9 h-9 shrink-0 overflow-hidden"
                  alt=""
                  src="/busd.svg"
                />
                <div className="relative text-sm font-light font-montserrat text-white text-left">
                  BUSD
                </div>
              </button>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <button className="cursor-pointer p-[5px] bg-[transparent] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[105px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[2.5px] border-solid border-jet-black">
                <img
                  className="relative w-9 h-9 shrink-0 overflow-hidden"
                  alt=""
                  src="/coin-10-1.svg"
                />
                <div className="relative text-sm font-light font-montserrat text-white text-left">
                  TEST
                </div>
              </button>
              <button className="cursor-pointer p-[5px] bg-[transparent] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[105px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[2.5px] border-solid border-jet-black">
                <img
                  className="relative w-9 h-9 shrink-0 overflow-hidden"
                  alt=""
                  src="/coin-11-1.svg"
                />
                <div className="relative text-sm font-light font-montserrat text-white text-left">
                  TEST
                </div>
              </button>
              <button className="cursor-pointer p-[5px] bg-[transparent] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[105px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[2.5px] border-solid border-jet-black">
                <img
                  className="relative w-9 h-9 shrink-0 overflow-hidden"
                  alt=""
                  src="/coin-7-1.svg"
                />
                <div className="relative text-sm font-light font-montserrat text-white text-left">
                  TEST
                </div>
              </button>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <button className="cursor-pointer p-[5px] bg-[transparent] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[105px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[2.5px] border-solid border-jet-black">
                <img
                  className="relative w-9 h-9 shrink-0 overflow-hidden"
                  alt=""
                  src="/coin-2-1.svg"
                />
                <div className="relative text-sm font-light font-montserrat text-white text-left">
                  TEST
                </div>
              </button>
              <button className="cursor-pointer p-[5px] bg-[transparent] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[105px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[2.5px] border-solid border-jet-black">
                <img
                  className="relative w-9 h-9 shrink-0 overflow-hidden"
                  alt=""
                  src="/coin-15-1.svg"
                />
                <div className="relative text-sm font-light font-montserrat text-white text-left">
                  TEST
                </div>
              </button>
              <button className="cursor-pointer p-[5px] bg-[transparent] rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[105px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[2.5px] border-solid border-jet-black">
                <img
                  className="relative w-9 h-9 shrink-0 overflow-hidden"
                  alt=""
                  src="/coin-12-1.svg"
                />
                <div className="relative text-sm font-light font-montserrat text-white text-left">
                  TEST
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row p-[9px] items-center justify-start gap-[18px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative font-light">Ratio</div>
                </div>
                <input
                  className="font-montserrat text-base bg-jet-black rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-row p-[9px] items-start justify-start border-[1px] border-solid border-matte-black"
                  type="text"
                  placeholder="1:1"
                />
              </div>
              <div className="flex flex-row p-[9px] items-center justify-start gap-[18px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative font-light">Amount:</div>
                </div>
                <input
                  className="font-montserrat text-base bg-jet-black rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-row p-[9px] items-start justify-start border-[1px] border-solid border-matte-black"
                  type="text"
                  placeholder="0.000000"
                />
                <div className="flex flex-row items-start justify-start text-base">
                  <div className="relative">BTC</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row p-[9px] items-start justify-start gap-[18px]">
              <div className="flex flex-row items-start justify-start">
                <div className="relative font-light">Fee:</div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative font-light">2.5%</div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer p-2.5 bg-[transparent] rounded-xl flex flex-row items-start justify-start border-[1px] border-solid border-white">
            <div className="relative text-base font-medium font-montserrat text-white text-left">
              Confirm
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
