import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import SectionTitle from "@/app/_components/section_title";

const Testimonials = () => {
  return (
    <section className="py-20" id="testimonials">
      <SectionTitle title="Kind words from" coloredPart="satisfied clients" />
      <div className="flex flex-col items-center justify-center max-lg:mt-10 mt-10">
        <InfiniteMovingCards
          items={items}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
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