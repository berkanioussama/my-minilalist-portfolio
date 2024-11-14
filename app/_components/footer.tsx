import BorderMagicButton from "@/components/ui/border_magic_button";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data/social_media";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 text-center overflow-hidden" id="contact">
      <div className="absolute left-0 -bottom-72 w-full min-h-96">
        <img src="/images/footer-grid.svg" alt="grid" className="w-full h-full opacity-70"/>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-bold lg:max-w-[45vw] md:max-w-[65vw] max-w-[90vw]">
          Ready to take <span className="text-purple">your</span> degital presence to the next level?
        </h2>
        <p className="text-white-200 text-center md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:berkanioussama@gmail.com">
          <BorderMagicButton title={"Let's get in touch"} position={"right"} icon={<FaLocationArrow />} />
        </a>
      </div>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between mt-16">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 Berkanioussama
        </p>
        <div className="flex items-center justify-center gap-2">
          {socialMedia.map((item) => (
            <div key={item.id} className="w-10 h-10 flex items-center justify-center bg-black-200 backdrop-filter backdrop-blur-lg saturate-180 border border-black-300 rounded-lg cursor-pointer">
              <img src={item.img} alt={item.img} className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;