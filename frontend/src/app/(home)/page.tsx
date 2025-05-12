import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "../_components/navbar";

const Home = async () => {
  const { userId } = await auth();

  console.log("User =>", userId);

  if (!userId) {
    redirect("/login(.*)");
  }

  //const dashboard = await getDashboard(month);

  return (
    <>
      <NavBar />
      <div className="p-6 space-y-6 flex flex-col overflow-hidden">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <p className="text-muted-foreground">
              Here you can find your links and their statistics.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
