import Image from "next/legacy/image";

const Company = ({ imgUrl, imgTitle }) => {
    return (
        <div className="slide">
            <Image
                src={imgUrl}
                alt=""
                title={imgTitle}
                width="150"
                height="100"
                objectFit="contain"
            />
        </div>
    );
};

export default Company;
