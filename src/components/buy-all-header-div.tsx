import Image from "next/image";

const BuyAllHeaderDiv = ({
  providingCrypto,
  receivingCrypto,
}: {
  providingCrypto: {
    name: string;
    amount: string;
  };
  receivingCrypto: {
    name: string;
    amount: string;
  };
}) => {
  if(providingCrypto.name === '') return <></>;
  return (
    <div className="w-full md:1/4 rounded-lg bg-zinc-700 shadow-md flex flex-col p-[9px] items-center justify-start gap-[9px] text-left text-base text-white font-montserrat">
      <div className="flex flex-col items-start justify-center gap-[9px]">
        <div className="flex flex-row items-center justify-start">
          <h4 className="m-0 relative text-[inherit] font-normal font-inherit">
            Buy All Trade
          </h4>
        </div>
          <div className="flex flex-row items-center justify-center gap-[9px]">
            <Image
              className="max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={`https://caldera.trade/images/coins/${providingCrypto.name}.png`}
              width="30"
              height="30"
              loading="lazy"
            />
            <Image
              className="max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/arrowright-1@2x.png"
              width="30"
              height="30"
            />
            <Image
              className="max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={`https://caldera.trade/images/coins/${receivingCrypto.name}.png`}
              width="30"
              height="30"
              loading="lazy"
            />
          </div>
      </div>
      <div className="flex flex-col items-center justify-end text-sm">
        <div className="flex flex-col items-start justify-center gap-[9px]">
          <div className="flex flex-col items-start justify-start space-y-2">
            <div className="flex flex-row items-start justify-start space-x-4">
              <div className="min-w-[60px] font-light">Ratio:</div>
              <div className="text-base font-abel">1:1</div>
            </div>
            <div className="flex flex-row items-start justify-start space-x-4">
              <div className="min-w-[60px] font-light">Amount:</div>
              <div className="font-montserrat">{providingCrypto.amount} {providingCrypto.name.toUpperCase()}</div>
            </div>
            <div className="flex flex-row items-start justify-start space-x-4">
              <div className="min-w-[60px] font-light">Fee:</div>
              <div>
                <div className="flex flex-col items-start justify-start gap-[9px]">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <Image
                      width="15"
                      height="15"
                      className="relative w-6 h-6 shrink-0 overflow-hidden"
                      alt=""
                      src={`https://caldera.trade/images/coins/${providingCrypto.name}.png`}
                    />
                    <div className="relative font-light">2.5%</div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <Image
                      width="15"
                      height="15"
                      className="relative w-6 h-6 shrink-0 overflow-hidden"
                      alt=""
                      src={`https://caldera.trade/images/coins/${receivingCrypto.name}.png`}
                    />
                    <div className="relative font-light">2.5%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAllHeaderDiv;
