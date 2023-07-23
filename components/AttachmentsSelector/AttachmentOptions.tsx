"use client";

import { twMerge } from "tailwind-merge";

// Components
import AttachmentOptionButton from "./AttachmentOptionButton";
import { AttachmentOption } from "@/interfaces/IAttachmentOptions";

const AttachmentOptions: React.FC<{
  step: number;
  title: string;
  subtitle?: string;
  options: AttachmentOption[];
  selectedOption: string | null;
  nextStep: () => void;
  previousStep: () => void;
  handleOptionSelection: (option: string) => void;
}> = ({
  step,
  title,
  subtitle,
  options,
  selectedOption,
  nextStep,
  previousStep,
  handleOptionSelection,
}) => {
  return (
    <>
      <div className="flex gap-4 w-full justify-between">
        <div className="flex-col gap-4 pr-12">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
        {options.map((option) => (
          <AttachmentOptionButton
            key={option.slug}
            isSelected={selectedOption === option.slug}
            onSelectOption={handleOptionSelection}
            option={option}
          />
        ))}
      </div>
      <div className="w-full flex gap-8 justify-between items-center">
        <a
          href="#"
          className="text-brand-black"
          onClick={() => alert("A expert will be in touch soon!")}
        >
          Not sure?
          <br className="sm:hidden" /> Talk to an expert!
        </a>
        <div className="flex gap-4">
          {step > 0 && (
            <button
              className={twMerge(
                "btn--outline hover:bg-gray-100 underline border-none"
              )}
              onClick={() => previousStep()}
            >
              Back
            </button>
          )}
          <button
            className="btn"
            disabled={!selectedOption}
            onClick={() => nextStep()}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AttachmentOptions;
