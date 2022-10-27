import PortfolioImage from "./PortfolioImage";

const Portfolio = () => {
    return (
        <section className="py-40 text-center" id="portfolio">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl pb-2 text-white font-satoshi-black">
                    Portfolio
                </h2>
                <p className="text-xl py-3 text-slate-400">
                    Each project is unique and accurate to the last pixel. Here
                    are some of my works.
                </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
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
