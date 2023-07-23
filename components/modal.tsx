import { twMerge } from "tailwind-merge";

const Modal: React.FC<{
  className?: string;
  children: React.ReactNode;
  closeModal: () => void;
}> = ({ closeModal, children, className }) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center absolute top-0 left-0 w-full min-h-screen h-max bg-black bg-opacity-25 animate py-10 px-2.5 backdrop-blur-sm overflow-auto",
        className
      )}
    >
      <div className="relative flex flex-col gap-8 sm:gap-16 px-6 py-4 bg-white rounded border-2 border-black w-full max-w-2xl md:max-w-4xl shadow-sm">
        <button
          className="absolute right-0 top-0 block w-fit leading-8 h-fit mr-6 mt-4 btn--outline hover:bg-gray-100 underline border-none"
          type="button"
          onClick={closeModal}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
