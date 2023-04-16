import Image from "next/image";

export default function CreateTradeCurrency({
  selectedCurrency,
  currencyList,
  amount,
  handleCurrencySelect,
  handleAmount,
}: {
  selectedCurrency: any;
  currencyList: Array<{
    image: string;
    label: string;
  }>;
  amount: any;
  handleCurrencySelect: (index: number) => void;
  handleAmount: (e: any) => void;
}) {
  return (
    <div className="relative rounded-t-3xs rounded-b-none bg-caldera-l-blue w-full flex flex-col py-[9px] px-2.5 box-border items-start justify-start text-left text-sm text-white font-montserrat">
      <div className="flex flex-col items-center justify-center gap-[18px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {currencyList.map((currency, index) => (
            <button
              key={index}
              className={`
                    ${selectedCurrency === index ? "bg-zinc-600" : "bg-none"}
                    cursor-pointe
                    py-[5px]
                    px-[7.5px]
                    bg-[transparent]
                    rounded-lg
                    shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]
                    box-border
                    w-[105px]
                    shrink-0
                    flex
                    flex-row
                    items-center
                    justify-center
                    gap-[10px]
                    border-[2.5px]
                    border-solid
                    ${
                      selectedCurrency === index
                        ? "border-zinc-400"
                        : "border-zinc-700"
                    }
                `}
              onClick={() => handleCurrencySelect(index)}
            >
              <Image
                width={100}
                height={100}
                className="relative w-9 h-9 shrink-0 overflow-hidden"
                alt=""
                src={currency.image}
              />
              <div className="relative text-sm font-light font-montserrat text-white text-left">
                {currency.label}
              </div>
            </button>
          ))}
        </div>
        <div className="flex flex-col items-end justify-start">
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="flex flex-row items-center justify-start space-x-4">
              <div className="min-w-[60px] font-light">Ratio:</div>
              <input
                className={`w-[50px] text-center text-white font-montserrat text-sm bg-zinc-700 rounded-8xs overflow-hidden p-2.5 rounded-lg`}
                type="text"
                value="1:1"
                disabled
              />
            </div>

            <div className="flex flex-row items-center justify-start space-x-4">
              <div className="min-w-[60px] font-light">Amount:</div>
              <input
                className={`w-full text-white font-montserrat text-sm bg-zinc-700 rounded-8xs overflow-hidden p-2.5 rounded-lg`}
                type="text"
                value={amount}
                onChange={handleAmount}
              />
              <div className="relative">BTC</div>
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
  );
}
