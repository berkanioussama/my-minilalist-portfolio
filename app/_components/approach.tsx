import SectionTitle from "@/app/_components/section_title";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CardReveal from "./card_reveal";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { approach } from "@/data/approach";

const Approach = () => {
  return (
    <section>
      <SectionTitle title="My" coloredPart="approach" />

      <div className="flex md:flex-row flex-col gap-4 items-center justify-center my-20">
        {approach.map((item, index) => (
          <CardReveal key={index} title={item.title} icon={<AceternityIcon order={item.order} />} description={item.description} >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </CardReveal>
        ))}
      </div>
    </section>
  );
}
 
export default Approach;

const AceternityIcon = ({order}: {order: string}) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 md:text-2xl text-md font-medium text-white backdrop-blur-3xl">
        {order}
      </span>
    </button>
    </div>
  );
};