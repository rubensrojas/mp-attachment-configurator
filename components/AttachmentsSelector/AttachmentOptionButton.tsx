// Interface
import { AttachmentOption } from "@/interfaces/IAttachmentOptions";
import { twMerge } from "tailwind-merge";

const AttachmentOptionButton: React.FC<{
  option: AttachmentOption;
  isSelected: boolean;
  onSelectOption: (option: string) => void;
}> = ({ option, isSelected, onSelectOption }) => {
  return (
    <div key={option.slug} className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-1 items-center justify-center">
        {option.icon && option.icon}
        {option.iconDescripton && <p>{option.iconDescripton}</p>}
      </div>
      <button
        className={twMerge(
          "py-8 px-4 w-full block border-2 border-black rounded font-semibold leading-none text-base transition-all ease-in-out duration-100 hover:bg-brand-yellow-pastel hover:border-brand-yellow-light",
          isSelected &&
            "bg-brand-yellow-pastel border-brand-yellow drop-shadow-brand-yellow"
        )}
        type="button"
        onClick={() => onSelectOption(option.slug)}
      >
        {option.name}
        {option.description && (
          <>
            <br />
            <span>{option.description}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default AttachmentOptionButton;
