import { Dialog } from "@headlessui/react";
import Modal from "@/components/animated-modal";

export default function TypeAmountFilterModal({ isOpen, handleClose }: any) {
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Dialog.Panel className="w-full lg:m-auto lg:max-w-md transform overflow-hidden bg-custom-second-blue rounded-2xl text-left align-middle shadow-xl transition-all relative">
        <div className="mx-auto w-full lg:max-w-md rounded-3xl p-2 space-y-2 bg-background-dark">
          <h1>Subhan is here</h1>
        </div>
      </Dialog.Panel>
    </Modal>
  );
}
