import companiesData from "../data/companiesData";
import Company from "./Company";
import Headline from "./Headline";

const Companies = () => {
    return (
        <section className="py-40">
            <div className="max-w-3xl mx-auto text-center">
                <Headline
                    variant="h2"
                    style="text-3xl md:text-5xl pb-2 text-white font-satoshi-black"
                >
                    Companies I've worked for
                </Headline>
                <p className="text-xl py-3 text-slate-400">
                    It has been my pleasure to satisfy numerous customers with
                    individual web solutions over the past years.
                </p>
            </div>
            <div className="pt-10">
                <div className="slider">
                    <div className="slide-track1">
                        {companiesData.map((company, index) => {
                            return (
                                <Company
                                    key={index}
                                    imgUrl={company.imgUrl}
                                    imgTitle={company.imgTitle}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <div className="slider">
                    <div className="slide-track2">
                        {companiesData.map((company, index) => {
                            return (
                                <Company
                                    key={index}
                                    imgUrl={company.imgUrl}
                                    imgTitle={company.imgTitle}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Companies;
