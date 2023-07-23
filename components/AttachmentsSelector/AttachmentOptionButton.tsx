// Interface
import { AttachmentOption } from "@/interfaces/IAttachmentOptions";
import { twMerge } from "tailwind-merge";

const AttachmentOptionButton: React.FC<{
  option: AttachmentOption;
  isSelected: boolean;
  onSelectOption: (option: string) => void;
}> = ({ option, isSelected, onSelectOption }) => {
  return (
    <div key={option.slug} className="flex flex-col gap-4">
      <button
        className={twMerge(
          "py-8 px-4 w-full block border-2 border-black rounded font-semibold leading-none text-base transition-colors ease-in-out duration-200 hover:bg-brand-yellow-light hover:border-brand-yellow-light",
          isSelected && "bg-brand-yellow border-brand-yellow"
        )}
        type="button"
        onClick={() => onSelectOption(option.slug)}
      >
        {option.name}
      </button>
    </div>
  );
};

export default AttachmentOptionButton;
