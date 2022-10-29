import Image from "next/legacy/image";

const PortfolioImage = (props) => {
    return (
        <div className="basis-1/3 flex-1">
            <Image
                src={props.src}
                alt=""
                className="rounded-lg object-cover clickable"
                width={"100px"}
                height={"100px"}
                layout="responsive"
            />
        </div>
    );
};

export default PortfolioImage;
