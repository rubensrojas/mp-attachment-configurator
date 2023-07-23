import Image from "next/image";
import React from "react";

const AttachmentOptionsMatchLoading = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center py-20 px-12">
      <Image
        className="animate-spin"
        src="/loading.png"
        alt="Loading"
        width={100}
        height={100}
      />
      <div className="text-center">
        <h3 className="text-2xl font-bold pr-12">Loading the attachments...</h3>
        <p>We are selecting the best attachments for your equipament.</p>
      </div>
    </div>
  );
};

export default AttachmentOptionsMatchLoading;
