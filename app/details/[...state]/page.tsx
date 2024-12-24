"use client";
import { getdetails } from "@/app/actions/getdetails";
import { Details } from "@/components/Details";
// import { HiddenGem } from "@/components/HiddenGem";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Places = {
  title: string;
  desc: string;
  img_url: string;
  badge: string;
}[];
export default function Page() {
  // const [open, setOpen] = useState(false);
  // const [hovered, setHovered] = useState(false);
  // const [hiddenGems, setHiddenGems] = useState<any>([]);
  const [places, setPlaces] = useState<Places>([]);
  const params: { state: string } = useParams<{ state: string }>();
  const state = params.state || ""; // Ensure `state` is at least an empty string
  const statename = decodeURIComponent(state[0]);
  const formattedState = statename.replace(/[-]/g, " ");

  useEffect(() => {
    const fetchdetails = async () => {
      const data = await getdetails(formattedState);
    const fetchedPlaces = data?.places || [];
    setPlaces(fetchedPlaces);
    };
    fetchdetails();
  },[formattedState])
  // const details = async () => {
  //   const data = await getdetails(formattedState);
  //   const fetchedPlaces = data?.places || [];
  //   setPlaces(fetchedPlaces);
  // };
  return (
    <>
      <div className="relative flex flex-col items-center mt-10 mb-[100px]">
        <p className="font-semibold md:text-7xl text-6xl text-gray-200 my-5">
          {formattedState}
        </p>
        <Details places={places} />
      </div>
      {/* <div className="flex float-end mb-6 mr-6">
        <button
          onClick={() => setOpen((p) => !p)}
          onMouseEnter={() => setHovered((p) => !p)}
          onMouseLeave={() => setHovered((p) => !p)}
          className="text-gray-400 bg-slate-800 px-4 py-2 rounded-md text-center"
        >
          {hovered ? "Hidden Gems" : "Shhh..!🤫"}
        </button>
      </div> */}
      {
      //   open && (
      //   <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      //     <div className="p-6 rounded-lg shadow-lg">
      //       {/* <div className="text-gray-300 float-end cursor-pointer" onClick={()=>setOpen(p=>!p)}><XMark /></div> */}
      //       <HiddenGem setOpen={setOpen} />
      //     </div>
      //   </div>
      // )
      }
    </>
  );
}


