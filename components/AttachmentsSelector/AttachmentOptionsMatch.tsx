import { AttachmentMatchOption } from "@/interfaces/IAttachmentOptions";
import Link from "next/link";
import AttachmentOptionsMatchCard from "./AttachmentOptionsMatchCard";

const AttachmentOptionsMatch: React.FC<{
  equipamentOptions: AttachmentMatchOption[];
}> = ({ equipamentOptions }) => {
  return (
    <>
      <h3 className="text-2xl font-bold pr-12">
        {equipamentOptions.length} Wood Splintters match your equipment
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
        {equipamentOptions.map((option) => (
          <AttachmentOptionsMatchCard key={option.slug} {...option} />
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Link href="/compare" className="btn--outline no-underline">
          Compare models
        </Link>
        <a
          href="#"
          className="btn--outline hover:bg-gray-100 underline border-none"
          onClick={() => alert("An expert will be in touch soon!")}
        >
          Not sure? Talk to an expert!
        </a>
      </div>
    </>
  );
};

export default AttachmentOptionsMatch;
