import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";

export default function Modal({ children, isOpen, onClose }: any) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 920px)" });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
          <div className="flex mx-auto max-h-full h-full lg:h-5/6 items-end lg:items-center justify-center p-4">
            {isSmallScreen ? (
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-1/2"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full"
              >
                {children}
              </Transition.Child>
            ) : (
              <>{children}</>
            )}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
