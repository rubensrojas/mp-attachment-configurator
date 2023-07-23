"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

const options = ["Excavator", "Skid Steer"];

const Modal: React.FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelection = (option: string): void => {
    if (selectedOption === option) {
      setSelectedOption(null);
      return;
    }
    setSelectedOption(option);
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-25 animate px-2.5">
      <div className="flex flex-col gap-8 sm:gap-16 px-6 py-4 bg-white rounded border-2 border-black w-full max-w-2xl lg:max-w-4xl">
        <div className="flex gap-4 w-full justify-between">
          <div className="flex-col gap-4">
            <h3 className="text-2xl font-bold">Attachment Finder - Step 1</h3>
            <p>What type of machine this attachment will be installed on?</p>
          </div>
          <button
            className="block w-fit underline leading-8 h-fit"
            type="button"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {options.map((option) => (
            <button
              key={option}
              className={twMerge(
                "py-8 px-4 w-full block border-2 border-black rounded font-semibold leading-none text-base transition-colors ease-in-out duration-200 hover:bg-brand-yellow-light hover:border-brand-yellow-light",
                selectedOption === option &&
                  "bg-brand-yellow border-brand-yellow"
              )}
              type="button"
              onClick={() => handleOptionSelection(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="w-full flex gap-8 justify-between items-center">
          <a href="#" className="text-brand-black">
            Not sure?
            <br className="sm:hidden" /> Talk to an expert!
          </a>
          <button className="btn" disabled={!selectedOption}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
