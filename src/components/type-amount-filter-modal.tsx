import { Dialog } from "@headlessui/react";
import Modal from "@/components/animated-modal";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const tradeTypes = [
  {
    label: "Buy All",
    key: "buy_all",
  },
  {
    label: "Partial Trade",
    key: "partial_trade",
  },
];
const operatorsList = [">=", "<=", "==", ">", "<"];

export default function TypeAmountFilterModal({ isOpen, handleClose }: any) {
  const [currentOperators, setCurrentOperators] = useState(">=");
  const [amount, setAmount] = useState<Number>();
  const [currentTradeType, setCurrentTradeType] = useState('');

  const handleAmountChange = (e: any) => {
    let tempAmount = parseFloat(e.target.value);
    if (tempAmount < 0) {
      setAmount(0);
    } else {
      setAmount(e.target.value);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Dialog.Panel className="w-full p-2 lg:m-auto lg:max-w-md transform overflow-hidden bg-custom-second-blue rounded-2xl text-left align-middle shadow-xl transition-all relative">
        <div className="mx-auto w-full lg:max-w-md rounded-2xl p-3 space-y-2 bg-background-dark">
          <div className="relative text-lg font-montserrat text-white text-left">
            Coin Amount
          </div>

          <div className="flex justify-between gap-2">
            <EqualOperators
              operatorsList={operatorsList}
              currentOperators={currentOperators}
              setCurrentOperators={setCurrentOperators}
            />

            <input
              className={`
            text-white
              font-montserrat
              text-sm
              bg-[transparent]
              disabled:bg-zinc-800
              rounded-8xs
              overflow-hidden
              flex
              flex-row
              p-2.5
              items-start
              justify-center
              border-[2px]
              border-solid
              w-full
              rounded-lg
            `}
              type="number"
              min={0}
              name="amount"
              value={amount?.toString()}
              onChange={handleAmountChange}
            />
          </div>

          <br />

          <div className="relative text-lg font-montserrat text-white text-left">
            Trade Type
          </div>

          {tradeTypes?.map((typeObj: any, index: number) => (
            <button
              key={index}
              className={`bg-transparent hover:text-gray-300 border-[2px] hover:border-gray-100 rounded-md p-2 mx-2 ${
                currentTradeType === typeObj.key
                  ? "border-gray-100 text-gray-100"
                  : "text-zinc-400 border-zinc-400"
              }`}
              onClick={() => setCurrentTradeType(typeObj.key)}
            >
              {typeObj?.label}
            </button>
          ))}

          <div className="flex justify-center">
            <button
              className={`text-gray-100 bg-transparent border-[2px] border-gray-100 rounded-2xl p-2 mx-2`}
              onClick={handleClose}
            >
              Confirm
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Modal>
  );
}

function EqualOperators({
  operatorsList,
  currentOperators,
  setCurrentOperators,
}: any) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex h-full w-full justify-center rounded-md bg-zinc-400 border-2 border-zinc-400 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {currentOperators}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute z-50 left-0 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{ width: "100%", maxHeight: "120px", overflowY: "auto" }}
        >
          <div className="px-1 py-1">
            {operatorsList?.map((operator: string, index: number) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-300 text-gray-900" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900`}
                    onClick={() => setCurrentOperators(operator)}
                  >
                    {operator}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
