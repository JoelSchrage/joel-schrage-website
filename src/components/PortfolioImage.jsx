import Image from "next/image";

const PortfolioImage = (props) => {
    return (
        <div className="basis-1/3 flex-1">
            <Image
                src={props.src}
                className="rounded-lg object-cover clickable"
                width={"100px"}
                height={"100px"}
                layout="responsive"
            />
        </div>
    );
};

export default PortfolioImage;
