import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import SectionTitle from "@/app/_components/section_title";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-20" id="testimonials">
      <SectionTitle title="Kind words from" coloredPart="satisfied clients" />
      <div className="flex flex-col items-center justify-center max-lg:mt-10 mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
}
 
export default Testimonials;