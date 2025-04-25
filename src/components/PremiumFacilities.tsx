import { NavLink } from "react-router-dom";
import { facilities } from "../assets";
import { facilitiesText } from "../constants";
import { Fade } from "react-awesome-reveal";

const PremiumFacilities = () => {
    return (
        <div className="w-full flex flex-col items-center mt-10 md:mt-24 ">
            <div className="max-w-[1200px]  w-full flex flex-col-reverse md:flex-row md:justify-between items-center md:items-start  px-4 md:gap-20 lg:gap-40">
                {/* Block with text */}
                <Fade direction={"left"} triggerOnce={true}>
                    <div className="flex flex-col mt-10 md:mt-0">
                        <h2 className="poppins font-bold text-[40px] md:text-[35px] lg:text-[40px]  text-mainPink md:mt-28">
                            {facilitiesText.headerText}
                        </h2>
                        <p className="poppins text-textGray max-w-[540px] md:min-w-[365px] leading-[37px] md:leading-[35px] lg:leading-[37px]  mt-2">
                            {facilitiesText.mainText}
                        </p>
                        {/* Button */}
                        <NavLink
                            to={facilitiesText.button.buttonLinkTo}
                            className="mt-6"
                        >
                            <button className=" text-mainPink  rounded-full  font-semibold md:px-16 py-4 md:py-5  poppins border-[2px] border-mainPink border-solid hover:bg-mainPink hover:text-white duration-200 w-full md:w-fit">
                                {facilitiesText.button.buttonText}
                            </button>
                        </NavLink>
                    </div>
                </Fade>
                {/* Image Block */}
                <div className="max-w-[572px] mt-7 md:mt-0">
                    <img
                        src={facilities}
                        alt="gym equimpment"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default PremiumFacilities;
