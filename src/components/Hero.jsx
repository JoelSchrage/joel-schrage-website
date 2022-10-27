import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillInstagram,
    AiFillGithub,
} from "react-icons/ai";

const Hero = () => {
    return (
        <section
            className="lg:container bg-custom-dark text-slate-400 pb-40 pt-80 flex"
            id="hero"
        >
            <div className="w-1/2">
                <div>
                    <span className="text-xl font-satoshi-medium">
                        Hi, my name is Joel Schrage
                    </span>
                    <h1 className="text-5xl md:text-7xl tracking-tight py-2 text-white font-satoshi-black">
                        I'm a creator of{" "}
                        <span className="magic">digital experiences</span>
                    </h1>
                    {/* <p className="text-md py-5 leading-8 text-xl max-w-xl text-white">
                    MERN Stack (MongoDB, Express.js, React.js, Node.js) |
                    Next.js | HTML5, CSS3 (Bootstrap & Tailwind CSS) JavaScript
                    Entwickler, Bitcoin Enthusiast & leidenschaftlicher Gamer
                </p> */}
                </div>
                <div className="text-4xl flex gap-12 pt-12">
                    <AiFillLinkedin className="social" />
                    <AiFillYoutube className="social" />
                    <AiFillInstagram className="social" />
                    <AiFillTwitterCircle className="social" />
                    <AiFillGithub className="social" />
                </div>
            </div>
            <div className="w-1/2 relative">
                <div className="absolute top-16 right-0 w-72 h-72 bg-custom-purple rounded-full mix-blend-plus-lighter filter blur-3xl animate-blob"></div>
                <div className="absolute top-2 -mt-8 right-20 w-72 h-72 bg-custom-teal rounded-full mix-blend-plus-lighter filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-10 right-48 w-72 h-72 bg-custom-pink rounded-full mix-blend-plus-lighter filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>
        </section>
    );
};

export default Hero;
