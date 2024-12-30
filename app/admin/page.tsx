import { AdminPage } from "@/components/AdminPage";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Page() {

  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <>
        <div className="text-gray-400 text-3xl flex justify-center items-center h-[85dvh]">
        <p className="">
          Please login to continue
        </p>
        </div>
      </>
    );
  }
  if (session.user?.role !== "ADMIN") {
    return (
      <p className="text-gray-400 text-3xl flex justify-center items-center h-[85dvh]">
        You are not authorized to access
      </p>
    );
  }
  return <AdminPage />;
}
