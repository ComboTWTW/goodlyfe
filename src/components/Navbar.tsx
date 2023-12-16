import { NavLink } from "react-router-dom";
import { navbar } from "../constants";
import { HamburgerSqueeze } from "react-animated-burgers";

const Navbar = () => {
    return (
        <div className="bg-mainPink w-full h-[101px] flex items-center justify-center">
            <div className="max-w-[1920px] flex w-full justify-between items-center px-4 md:px-6 lg:px-10">
                <NavLink to={navbar.logo.linkTo} reloadDocument={true}>
                    <span className="poppins text-white text-[30px] md:text-[40px] font-extrabold leading-[110%]">
                        Good<span className="text-lightPink">lyfe</span>
                    </span>
                </NavLink>

                <ul className="hidden md:visible md:flex md:gap-10 lg:gap-20">
                    {navbar.navbarLinks.map((link) => {
                        return (
                            <NavLink to={link.linkTo} reloadDocument={true}>
                                <li className="poppins text-white md:hover:text-black md:hover:duration-200">
                                    {link.text}
                                </li>
                            </NavLink>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
