import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import CurrencyFilterComponent from "@/components/currency-filter-component";

export default function CurrencyFilterModal({
  currencyFilter,
  setCurrencyFilter,
  isCurrencyFilterOpen,
  setIsCurrencyFilterOpen,
  handleCurrencyFilterClose,
}: any) {
  return (
    <>
      <Transition appear show={isCurrencyFilterOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={handleCurrencyFilterClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
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
                      onClick={handleCurrencyFilterClose}
                    >
                      <XMarkIcon className="h-5 w-5 text-gray-300 cursor-pointer" />
                    </button>
                  </div> */}

                  <CurrencyFilterComponent
                    currencyFilter={currencyFilter}
                    setCurrencyFilter={setCurrencyFilter}
                    isCurrencyFilterOpen={isCurrencyFilterOpen}
                    setIsCurrencyFilterOpen={setIsCurrencyFilterOpen}
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
