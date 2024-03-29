"use client";

import AttachmentsSelector from "@/components/AttachmentsSelector";
import Image from "next/image";
import { useState } from "react";

const perks = ["Expert advice", "Fast & easy financing", "24/7 support"];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className="py-10 md:py-44 max-w-xxl mx-auto">
        <div className="flex flex-col-reverse items-center gap-16 md:flex-row max-w-[1288px] mx-auto">
          <div className="flex flex-col gap-8 max-w-[680px]">
            <h1 className="text-4xl md:text-6xl font-bold">Wood Splitters</h1>
            <p className="text-sm md:text-base text-light-gray leading-snug">
              We have a full range of the best and most affordable excavator
              breakers. Perfect for processing aggregates like concrete,
              asphalt, gravel and more. Our wide range of equipment is designed
              to support everyone and every budget, from small to growing
              businesses. We also offer a large range of{" "}
              <a href="https://www.machinerypartner.com/heavy-equipment-categories/crushers">
                crushers
              </a>
              ,{" "}
              <a href="https://www.machinerypartner.com/heavy-equipment-categories/screeners">
                screeners
              </a>
              , and{" "}
              <a href="https://www.machinerypartner.com/heavy-equipment-categories/conveyors">
                conveyors
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
              {perks.map((perk) => (
                <div key={perk} className="flex gap-2">
                  <Image
                    src="/check-mark.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p className="font-semibold">{perk}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-8">
              <button type="button" className="btn">
                Talk to an expert today
              </button>
              <button
                type="button"
                className="btn--outline"
                onClick={() => setIsOpen(!isOpen)}
              >
                Attachment Finder
              </button>
            </div>
          </div>
          <Image
            className="object-contain h-auto max-h-[330px]"
            src="/breaker.png"
            alt="Breaker"
            width={540}
            height={330}
          />
        </div>
      </main>
      {isOpen && <AttachmentsSelector closeModal={() => setIsOpen(false)} />}
    </>
  );
}
