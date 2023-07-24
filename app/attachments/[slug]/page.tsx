import Image from "next/image";
import React from "react";

const perks = ["Expert advice", "Fast & easy financing", "24/7 support"];

const page: React.FC<{
  params: {
    slug: string;
  };
}> = ({ params: { slug } }) => {
  return (
    <main className="w-full h-full flex flex-col gap-2 items-center justify-center mt-20 text-center">
      <h1 className="text-3xl font-bold">The best you can find!</h1>
      <p className="text-6xl font-bold uppercase">{slug}</p>
      <Image
        className="object-contain h-auto max-h-[330px]"
        src="/breaker.png"
        alt="Breaker"
        width={540}
        height={330}
      />
      <button className="btn mx-auto">Buy now</button>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
        {perks.map((perk) => (
          <div key={perk} className="flex gap-2 mt-4">
            <Image src="/check-mark.svg" alt="Check" width={24} height={24} />
            <p className="font-semibold">{perk}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
