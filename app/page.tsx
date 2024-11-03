import Hero from "@/app/_components/hero";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center mx-auto sm:px-10 px-5 bg-black-100 overflow-hidden">
      <div className="w-full max-w-7xl">
        <Hero/>
      </div>
    </div>
  );
}
