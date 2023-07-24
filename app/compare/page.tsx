"use client";

import AttachmentOptionsMatchCard from "@/components/AttachmentsSelector/AttachmentOptionsMatchCard";
import { attachments } from "@/components/AttachmentsSelector/mockData";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-col gap-8 items-center justify-center mt-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Compare Models</h1>
      <Image
        className="object-contain h-auto max-h-[250px]"
        src="/breaker.png"
        alt="Breaker"
        width={540}
        height={330}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end ">
        {attachments.map((attachment) => (
          <AttachmentOptionsMatchCard key={attachment.slug} {...attachment} />
        ))}
      </div>
      <a
        href="#"
        className="btn--outline hover:bg-gray-100 underline border-none"
        onClick={() => alert("An expert will be in touch soon!")}
      >
        Not sure? Talk to an expert!
      </a>
    </main>
  );
};

export default page;
