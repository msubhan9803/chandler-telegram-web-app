import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AcceptTradeComponent from "./accept-trade-component";

export default function StartTradeModel({
  isOpen,
  closeModal,
  openModal,
  state,
  setState,
  formState,
  setFormState,
  handleClose
}: any) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
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
            <div className="flex m-auto max-h-full h-5/6 items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full m-auto max-w-md transform overflow-hidden rounded-2xl bg-[#1c1c1c] text-left align-middle shadow-xl transition-all relative">
                  {/* <button
                    className="absolute top-2 right-2 rounded-full hover:bg-opacity-50 hover:bg-gray-600 transition cursor-pointer z-50"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-300 cursor-pointer" />
                  </button> */}
                  <AcceptTradeComponent
                    state={state}
                    setState={setState}
                    formState={formState}
                    setFormState={setFormState}
                    isModal={true}
                    handleClose={handleClose}
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
