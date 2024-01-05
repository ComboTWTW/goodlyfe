import { NavLink } from "react-router-dom";
import { subheroPic } from "../assets";
import { subHero, subHeroButton } from "../constants";
import { Fade } from "react-awesome-reveal";

const SubHero = () => {
    return (
        <div className="w-full flex flex-col items-center mt-10 md:mt-24 ">
            <div className="max-w-[1200px]  w-full flex flex-col md:flex-row md:justify-between items-center md:items-start  px-4 md:gap-20 lg:gap-40">
                {/* Image Block */}

                <div className="max-w-[440px]">
                    <img
                        src={subheroPic}
                        alt="men is вeadlifting and woman is doing situps"
                        className="w-full"
                    />
                </div>

                {/* Block with text */}
                <Fade direction={"right"} triggerOnce={true}>
                    <div className="flex flex-col mt-10 md:mt-0">
                        <h2 className="poppins font-bold text-[40px] md:text-[35px] lg:text-[40px]  text-mainPink md:mt-28">
                            {subHero.headerText}
                        </h2>
                        <p className="poppins text-textGray max-w-[540px] md:min-w-[365px] leading-[37px] md:leading-[35px] lg:leading-[37px]  mt-2">
                            {subHero.mainText}
                        </p>
                        {/* Button */}
                        <NavLink to={subHeroButton.linkTo} className="mt-6">
                            <button className=" text-mainPink  rounded-full  font-semibold md:px-16 py-4 md:py-5  poppins border-[2px] border-mainPink border-solid hover:bg-mainPink hover:text-white duration-200 w-full md:w-fit">
                                {subHeroButton.text}
                            </button>
                        </NavLink>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default SubHero;
