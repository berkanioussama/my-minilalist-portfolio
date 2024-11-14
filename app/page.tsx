import Hero from "@/app/_components/hero";
import Navbar from "@/app/_components/navbar";
import Grid from "@/app/_components/grid";
import RecentProjects from "@/app/_components/recent_projects";
import Testimonials from "@/app/_components/testimonials";
import Experience from "@/app/_components/experience";
import Approach from "@/app/_components/approach";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center mx-auto sm:px-10 px-5 bg-black-100 overflow-hidden">
      <div className="w-full max-w-7xl">
        <Navbar/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <Approach />
      </div>
    </div>
  );
}
