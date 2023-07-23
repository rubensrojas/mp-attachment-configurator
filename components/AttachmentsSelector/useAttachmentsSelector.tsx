import { useState } from "react";
import { AttachmentOption } from "@/interfaces/IAttachmentOptions";
import Image from "next/image";

const machines: AttachmentOption[] = [
  {
    name: "Excavator",
    slug: "excavator",
  },
  {
    name: "Skid Steer",
    slug: "skid-steer",
  },
];

const excavatorSizes: AttachmentOption[] = [
  {
    name: "Small",
    description: "(Up to 10,000 lbs)",
    slug: "small-machine",
    icon: (
      <Image
        src="/attachment-icons/skidSteer.svg"
        alt="Skid steer"
        width={100}
        height={100}
      />
    ),
  },
  {
    name: "Medium",
    description: "(Between 10,000 and 20,000 lbs)",
    slug: "medium-machine",
    icon: (
      <Image
        src="/attachment-icons/skidSteer.svg"
        alt="Skid steer"
        width={140}
        height={140}
      />
    ),
  },
  {
    name: "Large",
    description: "(Between 20,000 and 40,000 lbs)",
    slug: "large-machine",
    icon: (
      <Image
        src="/attachment-icons/skidSteer.svg"
        alt="Skid steer"
        width={180}
        height={180}
      />
    ),
  },
];

const skidSteerSizes: AttachmentOption[] = [
  {
    name: "Small",
    description: "(Up to 10,000 lbs)",
    slug: "small-machine",
    icon: (
      <Image
        src="/attachment-icons/skidSteer.svg"
        alt="Skid steer"
        width={100}
        height={100}
      />
    ),
  },
  {
    name: "Medium",
    description: "(Between 10,000 and 20,000 lbs)",
    slug: "medium-machine",
    icon: (
      <Image
        src="/attachment-icons/skidSteer.svg"
        alt="Skid steer"
        width={140}
        height={140}
      />
    ),
  },
  {
    name: "Large",
    description: "(Between 20,000 and 40,000 lbs)",
    slug: "large-machine",
    icon: (
      <Image
        src="/attachment-icons/skidSteer.svg"
        alt="Skid steer"
        width={180}
        height={180}
      />
    ),
  },
];

const machineFlows: AttachmentOption[] = [
  {
    name: "Standard Flow",
    description: "(17-25 GPM)",
    slug: "standard-flow",
  },
  {
    name: "High Flow",
    description: "(30-45 GPM)",
    slug: "high-flow",
  },
];

const materialSizes: AttachmentOption[] = [
  {
    name: "Short",
    description: "(Ex: Small trunks)",
    slug: "shot-material-size",
    icon: (
      <Image
        src="/attachment-icons/wood-measure.png"
        alt="Wood measure"
        width={100}
        height={100}
      />
    ),
    iconDescripton: "6ft max",
  },
  {
    name: "Small",
    description: "(Ex: Small trees)",
    slug: "small-material-size",
    icon: (
      <Image
        src="/attachment-icons/wood-measure.png"
        alt="Wood measure"
        width={100}
        height={100}
      />
    ),
    iconDescripton: "6 to 12ft",
  },
  {
    name: "Large",
    description: "(Ex: Large trees)",
    slug: "large-material-size",
    icon: (
      <Image
        src="/attachment-icons/wood-measure.png"
        alt="Wood measure"
        width={100}
        height={100}
      />
    ),
    iconDescripton: "12ft and more",
  },
];

const mockSteps: Step[] = [
  {
    step: 0,
    title: "Attachment Finder",
    subtitle: "What type of machine this attachment will be installed on?",
    options: machines,
    selectedOption: null,
  },
  {
    step: 1,
    title: "Attachment Finder - Step 1",
    subtitle: "What is the weight category of the skid steer?",
    options: skidSteerSizes,
    selectedOption: null,
  },
  {
    step: 2,
    title: "Attachment Finder - Step 2",
    subtitle:
      "What is the Hydraulic Flow of your skid steer in GPM (gallons per minute)?",
    options: machineFlows,
    selectedOption: null,
  },
  {
    step: 3,
    title: "Attachment Finder - Step 3",
    subtitle:
      "What is the Hydraulic Flow of your skid steer in GPM (gallons per minute)?",
    options: materialSizes,
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

  const handleOptionSelection = (option: string): void => {
    const currentOption = steps[currentStep].selectedOption;

    const newOption = currentOption === option ? null : option;

    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[currentStep].selectedOption = newOption;
      return newSteps;
    });
  };

  return {
    steps,
    currentStep,
    handleNextStep,
    handlePreviousStep,
    handleOptionSelection,
  };
};

export default useAttachmentsSelector;
