import Service from "./Service";
import Headline from "./Headline";

const Services = () => {
    return (
        <section className="py-40 text-center" id="services">
            <div className="max-w-3xl mx-auto">
                <Headline
                    variant="h2"
                    style="text-3xl md:text-5xl pb-2 text-white font-satoshi-black"
                >
                    Services I offer
                </Headline>
                <p className="text-xl py-3 text-slate-400">
                    Whether custom development or working with a content
                    management system like WordPress – I will create your
                    digital world.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
                <Service
                    src="/assets/img/services/Joel-Schrage-Services-Coding.png"
                    h3="Coding"
                    p="Individual solutions with HTML5, CSS3 and JavaScript (ES6)"
                    h4="Tools I use"
                    tools1="Bootstrap / Tailwind"
                    tools2="React.js / Next.js"
                    tools3="Node.js / Express.js"
                    tools4="MongoDB"
                />
                <Service
                    src="/assets/img/services/Joel-Schrage-Services-WordPress.png"
                    h3="WordPress"
                    p="Custom CMS web design to develop high quality websites"
                    h4="Tools I use"
                    tools1="Elementor Pro"
                    tools2="OoohBoi Steroids"
                    tools3="JetPlugins"
                    tools4="ACF Pro"
                />
                <Service
                    src="/assets/img/services/Joel-Schrage-Services-WooCommerce.png"
                    h3="WooCommerce"
                    p="Creation of strong selling online stores for your products"
                    h4="Tools I use"
                    tools1="WPML"
                    tools2="Subscriptions"
                    tools3="AffiliateWP"
                    tools4="Stripe"
                />
            </div>
        </section>
    );
};

export default Services;
