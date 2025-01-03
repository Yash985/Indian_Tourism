"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
    
    <Link href={`details/${card.name.replace(/\s+/g, "-")}`} className="flex items-center justify-center">
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-40 w-5/6 sm:h-50 md:h-72 xl:h-80 md:w-full transition-all duration-300 ease-out cursor-pointer",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.state_img_url}
          alt={card.name}
          fill
          className="object-cover absolute inset-0"
          loading="lazy"
        />
        <div
          className={cn(
            "absolute inset-0 opacity-100 md:bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 ",
            hovered === index ? "md:opacity-100" : "md:opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.name}
          </div>
        </div>
      </div>
      </Link>
     
  )
);

Card.displayName = "Card";

type Card = {
  name: string;
  state_img_url: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl xl:max-w-7xl md:mx-auto md:px-8 w-full my-10">
      {cards.map((card, index) => (
        <Card
          key={card.name}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
