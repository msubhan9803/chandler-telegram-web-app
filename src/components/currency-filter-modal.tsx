import { Dialog } from "@headlessui/react";
import Modal from "@/components/animated-modal";
import CurrencyFilterComponent from "@/components/currency-filter-component";

export default function CurrencyFilterModal({
  currencyFilter,
  setCurrencyFilter,
  isCurrencyFilterOpen,
  setIsCurrencyFilterOpen,
  handleCurrencyFilterClose,
  handleFilterUpdate
}: any) {
  return (
    <Modal isOpen={isCurrencyFilterOpen} onClose={handleCurrencyFilterClose}>
      <Dialog.Panel className="w-full lg:m-auto lg:max-w-md transform overflow-hidden bg-custom-second-blue rounded-2xl text-left align-middle shadow-xl transition-all relative">
        <CurrencyFilterComponent
          currencyFilter={currencyFilter}
          setCurrencyFilter={setCurrencyFilter}
          isCurrencyFilterOpen={isCurrencyFilterOpen}
          setIsCurrencyFilterOpen={setIsCurrencyFilterOpen}
          handleFilterUpdate={handleFilterUpdate}
        />
      </Dialog.Panel>
    </Modal>
  );
}
