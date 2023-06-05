import React, { useState } from 'react';
import { Dialog } from "@headlessui/react";
import Modal from "@/components/animated-modal";
import CreateTradeComponent from "@/components/create-trade-component";

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
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Dialog.Panel className="w-full lg:m-auto lg:max-w-md transform overflow-hidden bg-custom-second-blue rounded-2xl text-left align-middle shadow-xl transition-all relative">
        <CreateTradeComponent
          state={state}
          selectedTradingCurrency={selectedTradingCurrency}
          setSelectedTradingCurrency={setSelectedTradingCurrency}
          selectedSeekingCurrency={selectedSeekingCurrency}
          setSelectedSeekingCurrency={setSelectedSeekingCurrency}
        />
      </Dialog.Panel>
    </Modal>
  );
}
