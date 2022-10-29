import companiesData from "../data/companiesData";
import Company from "./Company";
import Headline from "./Headline";
import Image from "next/legacy/image";

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
                {/* <div className="companies grid grid-cols-2 text-gray-500 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    {companiesData.map((skill, index) => {
                        return (
                            <Company
                                key={index}
                                imgUrl={skill.imgUrl}
                                imgTitle={skill.imgTitle}
                            />
                        );
                    })}
                </div> */}

                <div className="slider">
                    <div className="slide-track1">
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide500">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide0">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide00">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide0">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>

                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide500">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide0">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide00">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide0">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>

                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide500">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide0">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide00">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide0">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="slider">
                    <div className="slide-track2">
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>

                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>

                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                        <div className="slide">
                            <Image
                                src="/placeholder.jpg"
                                alt=""
                                width={"150px"}
                                height={"100px"}
                                objectFit="contain"
                                className="slide"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Companies;
