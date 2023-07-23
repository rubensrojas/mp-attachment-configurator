"use client";

// Components
import Modal from "../Modal";
import AttachmentOptions from "./AttachmentOptions";
import useAttachmentsSelector from "./useAttachmentsSelector";

const AttachmentsSelector: React.FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const {
    steps,
    currentStep,
    handleNextStep,
    handlePreviousStep,
    handleOptionSelection,
  } = useAttachmentsSelector();

  return (
    <Modal closeModal={closeModal}>
      <AttachmentOptions
        {...steps[currentStep]}
        nextStep={handleNextStep}
        previousStep={handlePreviousStep}
        handleOptionSelection={handleOptionSelection}
      />
    </Modal>
  );
};

export default AttachmentsSelector;
