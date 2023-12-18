import { NavLink } from "react-router-dom";
import { navbar } from "../constants";
import { HamburgerSqueeze } from "react-animated-burgers";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
    const [toggleBurger, setToggleBurger] = useState<boolean>(false);

    return (
        <div className="relative z-10 bg-mainPink w-full h-[80px] md:h-[101px] flex items-center justify-center">
            <div className="max-w-[1920px] z-20 h-full bg-mainPink flex w-full justify-between items-center px-4 md:px-6 lg:px-10">
                {/* Navbar logo */}
                <Fade direction="up" triggerOnce={true}>
                    <NavLink to={navbar.logo.linkTo} reloadDocument={true}>
                        <span className="poppins text-white text-[25px] md:text-[40px] font-extrabold leading-[110%]">
                            Good<span className="text-lightPink">lyfe</span>
                        </span>
                    </NavLink>
                </Fade>
                {/* NavbarLinks Desktop */}
                <Fade
                    direction="up"
                    damping={0.1}
                    cascade={true}
                    triggerOnce={true}
                >
                    <ul className="hidden md:visible md:flex md:gap-10 lg:gap-20">
                        {navbar.navbarLinks.map((link) => {
                            return (
                                <NavLink to={link.linkTo} reloadDocument={true}>
                                    <li
                                        key={link.linkTo}
                                        className="poppins text-white md:hover:text-black md:hover:duration-200"
                                    >
                                        {link.text}
                                    </li>
                                </NavLink>
                            );
                        })}
                    </ul>
                </Fade>
                {/* Mobile Burger Button */}
                <Fade
                    direction="up"
                    triggerOnce={true}
                    className="md:invisible md:absolute"
                >
                    <HamburgerSqueeze
                        barColor="white"
                        buttonWidth={35}
                        isActive={toggleBurger}
                        toggleButton={() =>
                            setToggleBurger((toggleBurger) => !toggleBurger)
                        }
                    />
                </Fade>
            </div>
            {/* NavbarLinks Mobile */}
            <ul
                className={` bottom-0 absolute min-w-full md:hidden bg-mainPink flex flex-col items-center pb-10 pt-5 gap-10 transition-all duration-300${
                    toggleBurger && "visible translate-y-full"
                }`}
            >
                {navbar.navbarLinks.map((link) => {
                    return (
                        <NavLink to={link.linkTo} reloadDocument={true}>
                            <li
                                key={link.linkTo}
                                className="poppins text-white text-lg md:hover:text-black"
                            >
                                {link.text}
                            </li>
                        </NavLink>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
