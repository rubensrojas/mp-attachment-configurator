const Modal: React.FC<{
  children: React.ReactNode;
  closeModal: () => void;
}> = ({ closeModal, children }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-25 animate px-2.5">
      <div className="relative flex flex-col gap-8 sm:gap-16 px-6 py-4 bg-white rounded border-2 border-black w-full max-w-2xl lg:max-w-4xl">
        <button
          className="absolute right-0 top-0 block w-fit underline leading-8 h-fit mr-6 mt-4"
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
