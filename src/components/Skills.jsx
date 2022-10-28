import skillsData from "../data/skillsData";
import Skill from "./Skill";
import Headline from "./Headline";

const Skills = () => {
    return (
        <section className="py-40">
            <div className="pb-10 max-w-3xl mx-auto text-center">
                <Headline
                    variant="h2"
                    style="text-3xl md:text-5xl pb-2 text-white font-satoshi-black"
                >
                    MERN Stack Developer
                </Headline>
                <p className="text-xl py-3 text-slate-400">
                    I like to craft modern and scalable products with the
                    perfect development tools for great user experiences
                    (JavaScript ecosystem).
                </p>
            </div>
            <div className="skills grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 py-7 px-4">
                {skillsData.map((skill, index) => {
                    return (
                        <Skill
                            key={index}
                            imgUrl={skill.imgUrl}
                            imgTitle={skill.imgTitle}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
