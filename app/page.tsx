import { Hero } from "@/components/Hero";
import { Places } from "@/components/Places";

export default function Home() {
  return (
    <>
      <div className="md:h-dvh h-[20rem]">
      <Hero />
      </div>
      <Places/>
    </>
    
  );
} 
