import Image from "next/image";
import Headline from "./Headline";

const Service = (props) => {
    return (
        <div className="p-10 pt-8 service text-slate-400 text-xl hover:shadow-white">
            <Image src={props.src} width={200} height={200} />
            <Headline
                variant="h3"
                style="text-2xl font-satoshi-bold text-white pt-4 pb-2"
            >
                {props.h3}
            </Headline>
            <p className="py-2">{props.p}</p>
            <Headline variant="h4" style="py-4 font-satoshi-bold">
                {props.h4}
            </Headline>
            <p className="py-1 text-lg">{props.tools1}</p>
            <p className="py-1 text-lg">{props.tools2}</p>
            <p className="py-1 text-lg">{props.tools3}</p>
            <p className="py-1 text-lg">{props.tools4}</p>
        </div>
    );
};

export default Service;
