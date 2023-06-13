import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import AcceptTradeComponent from "./accept-trade-component";

export default function StartTradeModel({
  isOpen,
  closeModal,
  openModal,
  state,
  setState,
  formState,
  setFormState,
  handleClose,
}: any) {
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
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex m-auto max-h-full h-full lg:h-5/6 items-end lg:items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full m-auto max-w-md transform overflow-hidden rounded-2xl bg-background-dark text-left align-middle shadow-xl transition-all relative">
                  <AcceptTradeComponent
                    className="h-auto"
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
