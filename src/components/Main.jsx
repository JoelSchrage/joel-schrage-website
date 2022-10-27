import Hero from "./Hero";
import Skills from "./Skills";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Main = () => {
    return (
        <main className="container mx-auto px-10">
            <Hero />
            <Skills />
            <Services />
            <Portfolio />
        </main>
    );
};

export default Main;
