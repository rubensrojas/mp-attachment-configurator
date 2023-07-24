"use client";

// Components
import Modal from "../Modal";
import AttachmentOptions from "./AttachmentOptions";
import AttachmentOptionsMatch from "./AttachmentOptionsMatch";
import AttachmentsSelectorLoading from "./AttachmentsSelectorLoading";
import useAttachmentsSelector from "./useAttachmentsSelector";

const AttachmentsSelector: React.FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const {
    steps,
    currentStep,
    hasFoundMatches,
    equipamentMatches,
    isLoadingMatches,
    isLoadingSteps,
    handleNextStep,
    handlePreviousStep,
    handleOptionSelection,
  } = useAttachmentsSelector();

  if (isLoadingSteps)
    if (steps.length)
      return (
        <Modal closeModal={closeModal}>
          <AttachmentsSelectorLoading
            title="Loading machine spececifications..."
            subtitle="To get exatcly what you need!"
          />
        </Modal>
      );
    else
      return (
        <Modal closeModal={closeModal}>
          <AttachmentsSelectorLoading
            title="Loading available machines for this attachment..."
            subtitle="Making sure we got you covered!"
          />
        </Modal>
      );

  if (isLoadingMatches)
    return (
      <Modal closeModal={closeModal}>
        <AttachmentsSelectorLoading
          title="Loading the attachments..."
          subtitle="We are selecting the best attachments for your equipament."
        />
      </Modal>
    );

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
