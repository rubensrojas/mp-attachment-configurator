import { useEffect, useState } from "react";
import { AttachmentMatchOption, Step } from "@/interfaces/IAttachmentOptions";
import {
  attachments,
  machines,
  skidSteerMockSteps,
  excavatorMockSteps,
} from "./mockData";

const useAttachmentsSelector = () => {
  const [isLoadingSteps, setIsLoadingSteps] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<Step[]>([]);

  const [isLoadingMatches, setIsLoadingMatches] = useState(false);
  const [hasFoundMatches, setHasFoundMatches] = useState(false);
  const [equipamentMatches, setEquipamentMatches] = useState<
    AttachmentMatchOption[] | null
  >(null);

  useEffect(() => {
    loadAvailableMachines();
  }, []);

  const loadAvailableMachines = () => {
    // Fake fetch
    setTimeout(() => {
      setIsLoadingSteps(false);
      setSteps([
        {
          step: 0,
          title: "Attachment Finder",
          subtitle:
            "What type of machine this attachment will be installed on?",
          options: machines,
          selectedOption: null,
        },
      ]);
    }, 1500);
  };

  const loadSelectedMachineSteps = () => {
    setIsLoadingSteps(true);

    const selectedMachine = steps[0].selectedOption;

    const nextSteps =
      selectedMachine === "skid-steer"
        ? skidSteerMockSteps
        : excavatorMockSteps;

    // Fake fetch
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
      setSteps((prevSteps) => [...prevSteps, ...nextSteps]);
      setIsLoadingSteps(false);
    }, 2000);
  };

  const loadEquipamentMatches = () => {
    setIsLoadingMatches(true);

    // Fake fetch
    setTimeout(() => {
      setHasFoundMatches(true);
      setIsLoadingMatches(false);
      setEquipamentMatches(attachments);
    }, 2000);
  };

  const handleNextStep = () => {
    if (!steps) return;

    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else if (steps.length === 1) loadSelectedMachineSteps();
    else loadEquipamentMatches();
  };

  const handlePreviousStep = () => {
    if (!steps) return;

    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleOptionSelection = (option: string): void => {
    if (!steps) return;

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
    hasFoundMatches,
    equipamentMatches,
    isLoadingMatches,
    isLoadingSteps,
    handleNextStep,
    handlePreviousStep,
    handleOptionSelection,
  };
};

export default useAttachmentsSelector;
