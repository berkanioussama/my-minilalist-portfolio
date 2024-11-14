import SectionTitle from "@/app/_components/section_title";
import { Button } from "@/components/ui/moving-border";
import { workExperience } from "@/data/work_experience";

const Experience = () => {
  return (
    <section className="py-20" id="experience">
      <SectionTitle title="My" coloredPart="work experience" />

      <div className="w-full pt-12 grid lg:grid-cols-4 gap-10">
        {workExperience.map((work) => (
          <Button key={work.id} borderRadius="1.75rem" duration={Math.floor(Math.random() * 3000) + 3000}
            className="flex-1 text-white border-slate-800"
            containerClassName="md:col-span-2 col-span-1"
          >
            <div className="flex lg:flex-row flex-col gap-2 lg:items-center lg:p-10 md:p-5 p-3 py-6">
              <img src={work.thumbnail} alt={work.thumbnail} className="lg:w-32 md:w-20 w-16" />
              <div className="lg:ms-5">
                <h3 className="md:text-2xl text-xl font-bold text-start">{work.title}</h3>
                <p className="text-white-100 mt-3 font-semibold text-start">{work.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
}
 
export default Experience;