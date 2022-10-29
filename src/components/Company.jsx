import Image from "next/legacy/image";

const Company = ({ imgUrl, imgTitle }) => {
    return (
        // <Image
        //     src={imgUrl}
        //     alt=""
        //     title={imgTitle}
        //     width={"50px"}
        //     height={"50px"}
        // />
        <div className="slide">
            <Image
                src={imgUrl}
                alt=""
                title={imgTitle}
                layout="fill"
                objectFit="contain"
            />
        </div>
        //     {/* <div className="py-7">
        //     <div className="h-10 sm:h-14 relative ">
        //         <Image
        //             src={imgUrl}
        //             alt=""
        //             title={imgTitle}
        //             layout="fill"
        //             objectFit="contain"
        //         />
        //     </div>
        // </div> */}
    );
};

export default Company;
