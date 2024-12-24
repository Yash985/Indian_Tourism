import { getStates } from "@/app/actions/getstates";
import { FocusCards } from "@/components/ui/focus-cards";
// import { states } from "@/constants/constants";
export async function Places() {
 
  const states: {
    name: string;
    state_img_url: string;
  }[] = await getStates()
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="md:text-5xl text-2xl font-bold text-gray-400 my-8">
          Vacations are long due🙄
        </h2>
      </div>
      <p className="md:text-2xl text-xl text-gray-500 my-2">Find your peace😌</p>
      <FocusCards cards={states} />
    </div>
  );
}
