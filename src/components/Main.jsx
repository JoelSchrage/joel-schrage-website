import Hero from "./Hero";
import Skills from "./Skills";
import Services from "./Services";
import Companies from "./Companies";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Main = () => {
    return (
        <main className="container mx-auto px-10">
            <Hero />
            <Skills />
            <Services />
            <Companies />
            <Portfolio />
            <Contact />
        </main>
    );
};

export default Main;
