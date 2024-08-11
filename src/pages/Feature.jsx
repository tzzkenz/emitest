import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section id="features" className="w-full py-20 bg-white text-[#00415A]">
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 px-4 xl:px-12">
          <Card
            title="Business Strategy"
            des="Crafting effective business strategies that drive growth and success."
            icon={null}
          />
          <Card
            title="App Development"
            des="Building robust and scalable applications for various platforms."
            icon={<AiFillAppstore />}
          />
          <Card
            title="SEO Optimization"
            des="Enhancing website visibility and ranking with proven SEO techniques."
            icon={<SiProgress />}
          />
          <Card
            title="Mobile Development"
            des="Creating intuitive and engaging mobile experiences for iOS and Android."
            icon={<FaMobile />}
          />
          <Card
            title="UX Design"
            des="Designing user-centric interfaces that are both functional and beautiful."
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="Reliable and secure hosting solutions for your website needs."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
