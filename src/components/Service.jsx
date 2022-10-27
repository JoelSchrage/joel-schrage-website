import Image from "next/image";

const Service = (props) => {
    return (
        <div className="p-10 service text-slate-400 text-xl">
            <Image src={props.src} width={100} height={100} />
            <h3 className="text-2xl font-satoshi-bold text-white pt-8 pb-2">
                {props.h3}
            </h3>
            <p className="py-2">{props.p}</p>
            <h4 className="py-4 font-satoshi-bold">{props.h4}</h4>
            <p className="py-1 text-lg">{props.tools1}</p>
            <p className="py-1 text-lg">{props.tools2}</p>
            <p className="py-1 text-lg">{props.tools3}</p>
            <p className="py-1 text-lg">{props.tools4}</p>
        </div>
    );
};

export default Service;
