"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";
import { currencyFormatter } from "@/utils/numberFormatter";

const AttachmentOptionsMatchCard: React.FC<{
  slug: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  isRecommended?: boolean;
}> = ({ slug, name, description, price, image, isRecommended }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <>
      <div
        key={slug}
        className="group flex flex-col border-2 rounded-lg overflow-hidden border-black transition-colors duration-200 hover:border-brand-yellow hover:bg-brand-yellow-pastel"
      >
        {isRecommended && (
          <p className="text-center p-2 bg-brand-yellow font-bold w-full border-b-2 border-black group-hover:border-brand-yellow transition-colors duration-200">
            Recommended
          </p>
        )}
        <div className="flex flex-col gap-4 p-4 text-center items-center justify-between">
          {image && <Image src={image} alt={name} width={40} height={40} />}
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold">{name}</p>
            <p>{description}</p>
            <p>{currencyFormatter(price)}</p>
          </div>
          <div className="flex gap-2 justify-between">
            <Link href={`/${slug}}`} className="btn no-underline">
              Buy now
            </Link>
            <button
              className="btn--outline hover:bg-gray-100 underline border-none"
              onClick={() => setIsDetailsOpen(true)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
      {isDetailsOpen && (
        <Modal className="h-full" closeModal={() => setIsDetailsOpen(false)}>
          <h6 className="font-bold px-12 text-center text-2xl py-12">
            The {name} is a great option for your needs! <br />
            Trust Machinery Partner and go ahead!
          </h6>
        </Modal>
      )}
    </>
  );
};

export default AttachmentOptionsMatchCard;
