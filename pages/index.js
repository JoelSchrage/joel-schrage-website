import dynamic from "next/dynamic";

import Head from "next/head";

import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

export default function Home() {
    const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
        ssr: false,
    });

    return (
        <div className="bg-custom-dark">
            <Head>
                <title>Joel Schrage</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Main />
            <Footer />
            <AnimatedCursor
                trailingSpeed={14}
                innerSize={20}
                outerSize={100}
                color="255, 255, 255"
                outerAlpha={1}
                hasBlendMode={true}
                outerStyle={{
                    mixBlendMode: "exclusion",
                }}
                innerStyle={{
                    mixBlendMode: "exclusion",
                }}
                innerScale={0.75}
                outerScale={2.5}
                clickables={[
                    "a",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".clickable",
                    ".mail",
                    "svg",
                    ".link",
                ]}
            />
        </div>
    );
}
