"use client";
import { Details } from "@/components/Details";
import { HiddenGem } from "@/components/HiddenGem";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const params: { state: string } = useParams<{ state: string }>();
  const state = params.state || ""; // Ensure `state` is at least an empty string
  const formattedState = state[0].replace(/-/g, " ");
  return (
    <>
      <div className="relative flex flex-col items-center mt-10 mb-[100px]">
        <p className="font-semibold text-7xl text-gray-200 my-5">
          {formattedState}
        </p>
        <Details />
      </div>
      <div className="flex float-end mb-6 mr-6">
        <button
          onClick={() => setOpen((p) => !p)}
          onMouseEnter={() => setHovered((p) => !p)}
          onMouseLeave={() => setHovered((p) => !p)}
          className="text-gray-400 bg-slate-800 px-4 py-2 rounded-md text-center"
        >
          {hovered ? "Hidden Gems" : "Shhh..!🤫"}
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="p-6 rounded-lg shadow-lg">
            {/* <div className="text-gray-300 float-end cursor-pointer" onClick={()=>setOpen(p=>!p)}><XMark /></div> */}
            <HiddenGem setOpen={setOpen} />
          </div>
        </div>
      )}
    </>
  );
}

// const XMark = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="size-10 text-gray-500 mt-4"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M6 18 18 6M6 6l12 12"
//       />
//     </svg>
//   );
// };
