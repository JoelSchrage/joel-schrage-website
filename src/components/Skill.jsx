import Image from "next/legacy/image";

const Skill = ({ imgUrl, imgTitle }) => {
    return (
        <div className="py-7">
            <div className="h-10 sm:h-14 relative ">
                <Image
                    src={imgUrl}
                    alt=""
                    title={imgTitle}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );
};

export default Skill;
