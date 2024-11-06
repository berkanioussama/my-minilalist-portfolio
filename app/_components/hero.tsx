'use client'

import BorderMagicButton from "@/components/ui/border_magic_button";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-svh pt-36 pb-20" id="home">
      <div>
        <Spotlight
          className="h-svh md:-top-20 md:-left-32 -top-40 -left-10"
          fill="white"
        />
        <Spotlight
          className="w-[50vh] h-[80vh] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="w-[50vh] h-[80vh] top-28 left-80"
          fill="blue"
        />
      </div>

      <div className="h-svh w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.15] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative flex justify-center my-20 z-10">
        <div className="flex flex-col items-center justify-center lg:max-w-[60vw] md:max-w-2xl max-w-[89vw]">
          <h2 className="max-w-80 text-xs text-center text-blue-100 uppercase tracking-widest">
            Dymamic Web Magic With React
          </h2>
          <TextGenerateEffect
            className="lg:text-6xl md:text-5xl text-[40px] text-center"
            words="Tronsforming Conseptes into Seamless Experiances"
          />
          <p className="mb-4 lg:text-2xl md:text-lg text-sm text-center">
            Hi, I&apos;am Oussama Ala Eddine a React Developer Based in Algeria
          </p>
          <BorderMagicButton title="Show my work" position="right" icon={<FaLocationArrow/>} />
        </div>
      </div>
    </div>
  )
}

export default Hero;