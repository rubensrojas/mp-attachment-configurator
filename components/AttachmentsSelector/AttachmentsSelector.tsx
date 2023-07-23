"use client";

// Components
import Modal from "../Modal";
import AttachmentOptions from "./AttachmentOptions";
import AttachmentOptionsMatch from "./AttachmentOptionsMatch";
import useAttachmentsSelector from "./useAttachmentsSelector";

const AttachmentsSelector: React.FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const {
    steps,
    currentStep,
    hasFoundMatches,
    equipamentMatches,
    handleNextStep,
    handlePreviousStep,
    handleOptionSelection,
  } = useAttachmentsSelector();

  if (hasFoundMatches)
    return (
      <Modal closeModal={closeModal}>
        <AttachmentOptionsMatch equipamentOptions={equipamentMatches} />
      </Modal>
    );

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
