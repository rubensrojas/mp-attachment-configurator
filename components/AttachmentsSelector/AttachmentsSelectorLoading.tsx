import Image from "next/image";
import React from "react";

const AttachmentsSelectorLoading: React.FC<{
  title?: string;
  subtitle?: string;
}> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center py-20 px-12">
      <Image
        className="animate-spin"
        src="/loading.png"
        alt="Loading"
        width={100}
        height={100}
      />
      {(title || subtitle) && (
        <div className="text-center">
          {title && <h3 className="text-2xl font-bold pr-12">{title}</h3>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
    </div>
  );
};

export default AttachmentsSelectorLoading;
