import { BecomeText } from "../constants";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Become = () => {
    return (
        <div
            className={`relative bg-cover bg-[center_bottom_50%] w-full bg-[url('./assets/become-bg.jpg')]  mt-10 md:mt-24 flex flex-col items-center`}
        >
            <div className=" w-full h-full bg-gray-900 bg-opacity-40 flex flex-col items-center py-20 md:py-60">
                <div className="max-w-[1200px] w-full flex flex-col items-center gap-4 px-4 md:px-0">
                    {/* Header */}
                    <Fade direction={"up"} triggerOnce={true}>
                        <h3 className="poppins font-bold text-[48px] leading-tight md:leading-normal text-center  md:text-6xl text-white">
                            {BecomeText.headerText}
                        </h3>
                    </Fade>
                    {/* Subheader */}
                    <Fade direction={"up"} triggerOnce={true}>
                        <p className="poppins text-white text-center text-lg leading-relaxed px-4 md:px-0 ">
                            {BecomeText.mainText[0]}{" "}
                            <br className="hidden md:inline" />{" "}
                            {BecomeText.mainText[1]}
                        </p>
                    </Fade>

                    {/* Button */}
                    <Fade direction={"up"} triggerOnce={true}>
                        <NavLink to={BecomeText.button.buttonLinkTo}>
                            <button className="rounded-full bg-mainPink w-full mt-3  px-28 md:px-20 py-5  poppins text-white md:hover:bg-[#be285e] heroButton">
                                {BecomeText.button.buttonText}
                            </button>
                        </NavLink>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Become;
