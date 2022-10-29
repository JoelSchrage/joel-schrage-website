import Headline from "./Headline";
import Image from "next/legacy/image";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="py-40" id="contact">
            <div className="max-w-3xl mx-auto text-center">
                <Headline
                    variant="h2"
                    style="text-5xl md:text-7xl tracking-tight py-2 text-white font-satoshi-black"
                >
                    Contact me today to bring{" "}
                    <span className="magic">your new</span> digital experience
                    into the real world
                </Headline>
                <p className="text-xl py-3 text-slate-400">
                    I am currently looking to join a new team of creative
                    designers and developers. If you think we might be a good
                    fit, send me an email below.
                </p>
            </div>
            <div className="mail pt-3 max-w-3xl mx-auto text-center">
                <Link href="mailto:mail@joelschrage.com">
                    <Image
                        src="/assets/img/contact/Joel-Schrage-Contact.png"
                        alt=""
                        width={"200px"}
                        height={"200px"}
                    />
                </Link>
            </div>
        </section>
    );
};

export default Contact;
