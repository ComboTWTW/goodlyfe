import { NavLink } from "react-router-dom";
import { ourAppText } from "../constants";
import { ourAppImage } from "../assets";

const OurApp = () => {
    return (
        <div className="w-full flex flex-col items-center bg-mainPink">
            <div className="max-w-[1200px] w-full flex justify-center px-4">
                <div
                    className="flex flex-col md:flex-row md:gap-10
                 lg:gap-20"
                >
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 poppins mt-14 lg:mt-32">
                        <h3 className="text-white font-bold text-[45px] leading-[120%]">
                            {ourAppText.header}
                        </h3>
                        <p className="text-white leading-[40px] text-lg max-w-[490px]">
                            {ourAppText.mainText}
                        </p>
                        <div className="flex flex-col gap-2 md:mb-20">
                            <p className="text-[#C4C4C4] text-lg">
                                {ourAppText.links.linksHeader}
                            </p>
                            <ul className="flex gap-4">
                                {ourAppText.links.linksArr.map(
                                    (link, index) => {
                                        return (
                                            <NavLink
                                                to={link.linkTo}
                                                key={link.imgSrc}
                                            >
                                                <img
                                                    src={link.imgSrc}
                                                    alt={link.linkTo}
                                                />
                                            </NavLink>
                                        );
                                    },
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="mt-8 md:mt-0 ">
                        <img
                            src={ourAppImage}
                            alt="App Images"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurApp;
