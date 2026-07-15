import { NavLink } from "react-router-dom";
import { footerText } from "../constants";

const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center bg-[#0b0d17] poppins  text-sm ">
            <div className="w-full max-w-[1200px] px-8 md:px-4 mt-11 md:mt-24 mb-11 flex flex-col gap-20 md:flex-row  md:gap-0 md:justify-between">
                {/* Left Col*/}
                <div className="flex flex-col gap-6 md:max-w-[255px]">
                    <NavLink to="#" className=" font-bold text-3xl text-white">
                        Good<span className="text-mainPink">Lyfe</span>
                    </NavLink>
                    <p className="text-gray-300 line-clamp-4 leading-loose text-sm">
                        {footerText.footerDesc.text}
                    </p>
                    <p className="text-gray-300 text-sm">
                        {footerText.footerDesc.copyright}
                    </p>
                </div>
                {/* QuickLinks */}
                <div className="flex flex-col gap-6 text-white">
                    <h4 className="text-white text-3xl md:text-2xl">
                        {footerText.quckLinks.linkHeader}
                    </h4>

                    <ul className="flex flex-col gap-4 text-lg md:text-base">
                        {footerText.quckLinks.links.map((link, index) => {
                            return (
                                <NavLink
                                    to={link.linkTo}
                                    className="md:hover:text-mainPink md:hover:duration-200"
                                >
                                    {link.text}
                                </NavLink>
                            );
                        })}
                    </ul>
                </div>
                {/* Reach us */}
                <div className="flex flex-col gap-6 text-white">
                    <h4 className="text-white text-3xl md:text-2xl">
                        {footerText.reachUs.reachHeader}
                    </h4>

                    <ul className="flex flex-col gap-7 text-center">
                        {footerText.reachUs.socials.map((link, index) => {
                            return (
                                <li className="flex gap-2">
                                    <img src={link.imgSrc} alt="" />
                                    <p>{link.text}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
