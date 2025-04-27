import { Heading } from "../../components";
import { skills } from "./data";
import "./skills.css";

const Skills = () => {
  return (
    <section className="container mx-auto mt-28" >
      <Heading text="Skills" />

      <div className="max-w-[60rem] mx-auto mt-16">
        <div className="grid grid-cols-4 place-content-center gap-y-12">
          {skills.map((skill, index) => (
            <div
              className="flex flex-col gap-8 text-center skill-item"
              key={skill.label}
              data-scroll
              data-scroll-speed="0.1"
              data-scroll-delay={index * 0.1}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={`/images/skills/${skill.icon}`}
                alt="skill"
                className="w-auto h-[80px] object-contain"
              />
              <span className="text-2xl tracking-widest font-light uppercase">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
