import { NavLink } from "react-router-dom";
import { heroButton } from "../constants";
import { Fade } from "react-awesome-reveal";
import Wave from "react-wavify";

const Hero = () => {
    return (
        <div
            className={`relative bg-cover bg-[center_bottom_85%] w-full bg-[url('./assets/hero-bg.jpg')]`}
        >
            {/* Makes bg darker */}
            <div className=" w-full h-full bg-gray-900 bg-opacity-20">
                {/* Content */}
                <div className=" w-full px-4 flex flex-col items-center">
                    {/* Header */}
                    <Fade direction={"up"} triggerOnce={true} className="z-[2]">
                        <h1 className="poppins text-white font-bold text-4xl md:text-7xl leading-[1.2] md:leading-[1.2] text-center mt-24 md:mt-60">
                            Welcome to <br />
                            Good<span className="text-lightPink">
                                lyfe
                            </span>{" "}
                            Gyms
                        </h1>
                    </Fade>
                    {/* Button */}
                    <Fade direction={"up"} triggerOnce={true} className="z-[2]">
                        <NavLink to={heroButton.linkTo}>
                            <button className="mt-6 md:mt-10 rounded-full bg-mainPink px-11 md:px-16 py-4 md:py-6 poppins text-white mb-32 md:mb-52 md:hover:bg-[#be285e] heroButton">
                                {heroButton.text}
                            </button>
                        </NavLink>
                    </Fade>
                </div>
            </div>
            {/* White Wave */}
            <Wave
                className="absolute bottom-0"
                fill="#fff"
                paused={false}
                style={{ display: "flex", zIndex: 1 }}
                options={{
                    height: 120,
                    amplitude: 20,
                    speed: 0.2,
                    points: 2,
                }}
            />
        </div>
    );
};

export default Hero;
