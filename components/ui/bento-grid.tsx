"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { GlobeDemo } from "../grid_globe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import BorderMagicButton from "./border_magic_button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  titleClassName,
  description,
  image,
  imageClassName,
  spareImage,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  image?: string;
  imageClassName?: string;
  spareImage?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("berkanioussama@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative row-span-1 justify-between flex flex-col overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white border border-white/[0.1] space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute w-full h-full">
          {image && (
            <img
              src={image}
              alt={image}
              className={cn("w-full h-full object-cover", imageClassName)}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImage && (
            <img
              src={spareImage}
              alt={spareImage}
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute flex items-center justify-center text-white font-bold z-50"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "relative flex flex-col md:h-full min-h-40 lg:p-10 p-5 group-hover/bento:translate-x-2 transition duration-200"
          )}
        >
          <div className="font-sans font-extraLight text-[#c1c2c3] lg:text-base md:text-xs text-sm z-10">
            {description}
          </div>
          <div className="max-w-96 font-sans font-bold lg:text-3xl text-lg z-10">
            {title}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="absolute flex w-fit lg:gap-5 gap-1 lg:-right-2 -right-3">
              <div className="flex flex-col lg:gap-8 md:gap-3 gap-3">
                {leftList.map((item, index) => (
                  <span
                    key={index}
                    className="lg:py-4 lg:px-3 py-2 px-3 z-10 lg:text-base text-xs text-center rounded-lg bg-[#10132E] lg:opacity-100 opacity-50"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 text-center rounded-lg bg-[#10132E]" />
              </div>
              <div className="flex flex-col lg:gap-8 gap-3">
                <span className="lg:py-4 lg:px-3 py-4 px-3 text-center rounded-lg bg-[#10132E]" />
                {rightList.map((item, index) => (
                  <span
                    key={index}
                    className="lg:py-4 lg:px-3 py-2 px-3 z-10 lg:text-base text-xs text-center rounded-lg bg-[#10132E] lg:opacity-100 opacity-50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
          <div className="relative mt-5">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <BorderMagicButton
              title={copied ? "Email copied" : "Copy my email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="bg-[#161a31]"
              handleClick={handleCopy}
            />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

const leftList = ["Typescript", "React", "Next.js"];
const rightList = ["Prisma", "Clerk", "Figma"];
