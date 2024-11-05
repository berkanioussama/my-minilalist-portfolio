import Hero from "@/app/_components/hero";
import Navbar from "@/app/_components/navbar";
import Grid from "@/app/_components/grid";
import RecentProjects from "./_components/recent_projects";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center mx-auto sm:px-10 px-5 bg-black-100 overflow-hidden">
      <div className="w-full max-w-7xl">
        <Navbar/>
        <Hero />
        <Grid />
        <RecentProjects/>
      </div>
    </div>
  );
}
