import PortfolioImage from "./PortfolioImage";
import Headline from "./Headline";

const Portfolio = () => {
    return (
        <section className="py-40 text-center" id="portfolio">
            <div className="max-w-3xl mx-auto">
                <Headline
                    variant="h2"
                    style="text-3xl md:text-5xl pb-2 text-white font-satoshi-black"
                >
                    My portfolio
                </Headline>
                <p className="text-xl py-3 text-slate-400">
                    Each project is unique and accurate to the last pixel. Here
                    are some of my works.
                </p>
            </div>
            <div className="flex flex-col gap-10 pt-10 lg:flex-row lg:flex-wrap">
                <PortfolioImage src="/placeholder.jpg" />
                <PortfolioImage src="/placeholder.jpg" />
                <PortfolioImage src="/placeholder.jpg" />
                <PortfolioImage src="/placeholder.jpg" />
                <PortfolioImage src="/placeholder.jpg" />
                <PortfolioImage src="/placeholder.jpg" />
            </div>
        </section>
    );
};

export default Portfolio;
