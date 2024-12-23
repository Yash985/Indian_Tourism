import { getStates } from "@/app/actions/getstates";
import { FocusCards } from "@/components/ui/focus-cards";
// import { states } from "@/constants/constants";
export async function Places() {
  // const cards = [
  //   {
  //     title: "Goa",
  //     src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Kerala",
  //     src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Lakswadeep",
  //     src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Tamil Nadu",
  //     src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "West Bengal",
  //     src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "The First Rule",
  //     src: "https://assets.aceternity.com/the-first-rule.png",
  //   },
  // ];
  const states: {
    name: string;
    state_img_url: string;
    }[]=await getStates()
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="text-5xl font-bold text-gray-400 my-3">
          Vacations are long due🙄
        </h2>
      </div>
      <p className="text-2xl text-gray-500 my-2">Find your peace😌</p>
      <FocusCards cards={states} />
    </div>
  );
}
