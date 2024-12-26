"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ImagesSlider } from "./ui/images-slider";
import { useTypewriter } from "react-simple-typewriter";
import { getStates } from "@/app/actions/getstates";

export function Hero() {
  const [images, setImages] = useState<string[]>([]);
  const [text] = useTypewriter({
    words: [
      "Incredible",
      "Beautiful",
      "Magnificent",
      "Breathtaking",
      "Exquisite",
      "Wonderful",
      "Majestic",
      "Lovely",
      "Fascinating",
      "Marvelous",
      "Amazing",
      "Awesome",
      "Fabulous",
      "Sensational",
      "Stupendous",
      "Unbelievable",
      "Unforgettable",
    ],
    loop: 0,
    delaySpeed: 3000,
  });
  useEffect(() => { 
    const fetchImages = async () => {
      const res = await getStates();
      const fetchedImages = res?.map((state: { state_img_url: string }) => state.state_img_url) || [];
      setImages(fetchedImages);
    };
    fetchImages();
  },[])
  // const images = [
  //   "https://tourism-images.s3.ap-south-1.amazonaws.com/goa/goa.jpg",
  //   "https://tourism-images.s3.ap-south-1.amazonaws.com/jandk/j%26k.jpg",
  //   "https://tourism-images.s3.ap-south-1.amazonaws.com/westbengal/west_bengal.jpg",
  //   "https://tourism-images.s3.ap-south-1.amazonaws.com/himachal/dharamsala.jpg",
  //   "https://tourism-images.s3.ap-south-1.amazonaws.com/karnataka/karnataka.jpg",
  //   "https://tourism-images.s3.ap-south-1.amazonaws.com/lehladakh/khardung_la_pass.jpg"
  // ];

  return (
    <ImagesSlider className=" " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <p className="font-semibold text-lg md:text-4xl xl:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
          Explore
        </p>
        <motion.p className="font-bold text-xl md:text-5xl lg:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {text} India
        </motion.p>
        <p className="font-semibold text-lg md:text-4xl xl:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
          Like never before
        </p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Explore now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
