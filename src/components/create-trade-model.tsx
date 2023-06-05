import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CreateTradeComponent from "@/components/create-trade-component";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function CreateTradeModel({ isOpen, closeModal }: any) {
  const [state, setState] = useState({
    userId: "",
    username: "",
    chatId: "",
  });
  const [selectedTradingCurrency, setSelectedTradingCurrency] = useState<{
    index: number;
    currency: string;
  }>({
    index: -1,
    currency: "",
  });
  const [selectedSeekingCurrency, setSelectedSeekingCurrency] = useState<{
    index: number;
    currency: string;
  }>({
    index: -1,
    currency: "",
  });

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex m-auto max-h-full h-full lg:h-5/6 items-end lg:items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full"
              >
                <Dialog.Panel className="w-full lg:m-auto lg:max-w-md transform overflow-hidden bg-custom-second-blue rounded-2xl text-left align-middle shadow-xl transition-all relative">
                  {/* <div className="flex justify-end m-2">
                    <button
                      className="rounded-full hover:bg-opacity-50 hover:bg-gray-600 transition cursor-pointer z-50"
                      onClick={closeModal}
                    >
                      <XMarkIcon className="h-5 w-5 text-gray-300 cursor-pointer" />
                    </button>
                  </div> */}

                  <CreateTradeComponent
                    state={state}
                    selectedTradingCurrency={selectedTradingCurrency}
                    setSelectedTradingCurrency={setSelectedTradingCurrency}
                    selectedSeekingCurrency={selectedSeekingCurrency}
                    setSelectedSeekingCurrency={setSelectedSeekingCurrency}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
