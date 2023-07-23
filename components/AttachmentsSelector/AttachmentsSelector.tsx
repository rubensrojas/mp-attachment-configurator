"use client";

// Components
import Modal from "../Modal";
import AttachmentOptions from "./AttachmentOptions";
import useAttachmentsSelector from "./useAttachmentsSelector";

const AttachmentsSelector: React.FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const { steps, currentStep, handleNextStep, handlePreviousStep } =
    useAttachmentsSelector();

  return (
    <Modal closeModal={closeModal}>
      <AttachmentOptions
        {...steps[currentStep]}
        nextStep={handleNextStep}
        previousStep={handlePreviousStep}
      />
    </Modal>
  );
};

export default AttachmentsSelector;
