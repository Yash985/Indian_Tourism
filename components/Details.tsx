"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
type Places = {
  title: string;
  desc: string;
  img_url: string;
  badge: string;
}[];
export function Details({ places }: { places: Places }) {
  if (places.length === 0) { 
    return <p className="text-5xl text-gray-400 mt-24">Loading...</p>
  }
  return (
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative text-gray-300">
          {places.map((place, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {place.badge}
              </h2>
  
              <p className={twMerge( "text-xl mb-4")}>
                {place.title}
              </p>
  
              <div className="text-sm  prose prose-sm dark:prose-invert text-gray-400">
                {place?.img_url && (
                  <Image
                    src={place.img_url}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {place.desc}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
      )    
  ;
}


