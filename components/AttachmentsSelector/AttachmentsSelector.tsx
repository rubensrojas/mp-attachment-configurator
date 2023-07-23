"use client";
import { useState } from "react";

// Components
import Modal from "../Modal";
import AttachmentOptions from "./AttachmentOptions";
import { AttachmentOption } from "@/interfaces/IAttachmentOptions";

const machines = [
  {
    name: "Excavator",
    slug: "asdass11",
  },
  {
    name: "Excavator",
    slug: "asdasd",
  },
];

const machineSizes = [
  {
    name: "Small",
    slug: "small",
  },
  {
    name: "Medium",
    slug: "medium",
  },
  {
    name: "Large",
    slug: "large",
  },
];

interface Step {
  step: number;
  title: string;
  subtitle?: string;
  options: AttachmentOption[];
  currentOption?: string;
}

const AttachmentsSelector: React.FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      step: 0,
      title: "Attachment Finder - Step 1",
      subtitle: "What type of machine this attachment will be installed on?",
      options: machines,
    },
    {
      step: 1,
      title: "Attachment Finder - Step 2",
      subtitle: "What type of machine this attachment will be installed on?",
      options: machineSizes,
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

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
