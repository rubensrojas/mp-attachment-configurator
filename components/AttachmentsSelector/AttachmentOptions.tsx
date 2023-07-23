"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import AttachmentOptionButton from "./AttachmentOptionButton";
import { AttachmentOption } from "@/interfaces/IAttachmentOptions";

const AttachmentOptions: React.FC<{
  step: number;
  title: string;
  subtitle?: string;
  options: AttachmentOption[];
  currentOption?: string;
  nextStep: () => void;
  previousStep: () => void;
}> = ({
  step,
  title,
  subtitle,
  options,
  currentOption,
  nextStep,
  previousStep,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    currentOption ?? null
  );

  const handleOptionSelection = (option: string): void => {
    if (selectedOption === option) {
      setSelectedOption(null);
      return;
    }
    setSelectedOption(option);
  };

  return (
    <>
      <div className="flex gap-4 w-full justify-between">
        <div className="flex-col gap-4">
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
        <a href="#" className="text-brand-black">
          Not sure?
          <br className="sm:hidden" /> Talk to an expert!
        </a>
        <div className="flex gap-4">
          {step > 0 && (
            <button
              className={twMerge(
                "btn--outline hover:bg-gray-100 underline border-none"
              )}
              disabled={!selectedOption}
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
