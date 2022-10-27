import Image from "next/image";

const Skill = ({ imgUrl, imgTitle }) => {
    return (
        <div className="py-7">
            <div className="h-10 sm:h-14 relative grid-cols-2">
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
