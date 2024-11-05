import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {items.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.title}
            title={item.title}
            titleClassName={item.titleClassName}
            description={item.description}
            className={item.className}
            image={item.image}
            imageClassName={item.imageClassName}
            spareImage={item.spareImage}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    titleClassName: "justify-end",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    image: "/images/about/b1.svg",
    imageClassName: "w-full h-full",
    spareImage: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    titleClassName: "justify-start",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    image: "",
    imageClassName: "",
    spareImage: "",
  },
  {
    id: 3,
    title: "My tech stack",
    titleClassName: "justify-center",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    image: "",
    imageClassName: "",
    spareImage: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    titleClassName: "justify-start",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    image: "/images/about/grid.svg",
    imageClassName: "",
    spareImage: "/images/about/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    image: "/images/about/b5.svg",
    imageClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    spareImage: "/images/about/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    image: "",
    imageClassName: "",
    spareImage: "",
  },
];
 
export default Grid;