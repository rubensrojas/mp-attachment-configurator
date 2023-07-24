import {
  AttachmentMatchOption,
  AttachmentOption,
  Step,
} from "@/interfaces/IAttachmentOptions";
import Image from "next/image";

export const machines: AttachmentOption[] = [
  {
    name: "Excavator",
    slug: "excavator",
  },
  {
    name: "Skid Steer",
    slug: "skid-steer",
  },
];

export const excavatorSizes: AttachmentOption[] = [
  {
    name: "Small",
    description: "(Up to 10,000 lbs)",
    slug: "small-machine",
    icon: (
      <Image
        src="/attachment-icons/excavator.png"
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
        src="/attachment-icons/excavator.png"
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
        src="/attachment-icons/excavator.png"
        alt="Skid steer"
        width={180}
        height={180}
      />
    ),
  },
];

export const skidSteerSizes: AttachmentOption[] = [
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

export const machineFlows: AttachmentOption[] = [
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

export const materialSizes: AttachmentOption[] = [
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

export const skidSteerMockSteps: Step[] = [
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

export const excavatorMockSteps: Step[] = [
  {
    step: 1,
    title: "Attachment Finder - Step 1",
    subtitle: "What is the weight category of the skid steer?",
    options: excavatorSizes,
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

export const attachments: AttachmentMatchOption[] = [
  {
    name: "HF300",
    description: "Cone Splitter",
    price: 12000,
    image: "/wrench.png",
    slug: "hf300",
  },
  {
    name: "HF150",
    description: "Cone Splitter",
    price: 7500,
    image: "/wrench.png",
    slug: "hf150",
    isRecommended: true,
  },
  {
    name: "HF400",
    description: "Cone Splitter",
    price: 30000,
    image: "/wrench.png",
    slug: "hf400",
  },
];
