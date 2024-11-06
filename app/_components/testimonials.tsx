import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="lg:text-5xl font-bold text-center ">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center justify-center max-lg:mt-10 mt-10">
        <InfiniteMovingCards
          items={items}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const items = [
  {
    title: "Amazing",
    quote: "I am very happy with the product. It really helped me. I am so happy with the product. It really helped me.",
    name: "Berkanioussama",
  },
  {
    title: "Good job",
    quote: "It really helped me. I am so happy with the product. It really helped me.",
    name: "Berkanioussama",
  },
  {
    title: "Good job",
    quote: "It really helped me. I am so happy with the product. It really helped me.",
    name: "Berkanioussama",
  }
]
 
export default Testimonials;