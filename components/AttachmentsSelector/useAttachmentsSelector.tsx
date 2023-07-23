import { useState } from "react";
import { AttachmentOption } from "@/interfaces/IAttachmentOptions";
import Image from "next/image";

const machines = [
  {
    name: "Excavator",
    slug: "excavator",
  },
  {
    name: "Skid Steer",
    slug: "skid-steer",
  },
];

const machineSizes = [
  {
    name: "Small",
    description: "(Up to 10,000 lbs)",
    slug: "small",
    icon: (
      <Image
        src="/machine-icons/skidSteer.svg"
        alt="Skid steer"
        width={100}
        height={100}
      />
    ),
  },
  {
    name: "Medium",
    description: "(Between 10,000 and 20,000 lbs)",
    slug: "medium",
    icon: (
      <Image
        src="/machine-icons/skidSteer.svg"
        alt="Skid steer"
        width={130}
        height={130}
      />
    ),
  },
  {
    name: "Large",
    description: "(Between 20,000 and 40,000 lbs)",
    slug: "large",
    icon: (
      <Image
        src="/machine-icons/skidSteer.svg"
        alt="Skid steer"
        width={180}
        height={180}
      />
    ),
  },
];

const mockSteps: Step[] = [
  {
    step: 0,
    title: "Attachment Finder - Step 1",
    subtitle: "What type of machine this attachment will be installed on?",
    options: machines,
    selectedOption: null,
  },
  {
    step: 1,
    title: "Attachment Finder - Step 2",
    subtitle: "What type of machine this attachment will be installed on?",
    options: machineSizes,
    selectedOption: null,
  },
];

interface Step {
  step: number;
  title: string;
  subtitle?: string;
  options: AttachmentOption[];
  currentOption?: string;
  selectedOption: string | null;
}

const useAttachmentsSelector = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<Step[]>(mockSteps);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return {
    steps,
    currentStep,
    handleNextStep,
    handlePreviousStep,
  };
};

export default useAttachmentsSelector;
