import { NavLink } from "react-router-dom";
import { socialText } from "../constants";

const Social = () => {
    return (
        <section className="w-full bg-[#e2e1e1] py-20 poppins">
            <div className="max-w-5xl mx-auto flex flex-col items-center px-4">
                <h3 className="text-mainPink text-4xl md:text-5xl font-bold">
                    {socialText.socialHeader}
                </h3>

                <div className="relative mt-10 w-full md:w-fit">
                    <ul className="relative flex justify-between w-full md:w-fit md:gap-24">
                        {socialText.socialLinks.map((link) => (
                            <li key={link.linkTo}>
                                <NavLink
                                    to={link.linkTo}
                                    className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-white shadow-sm md:transition hover:scale-105"
                                >
                                    <img
                                        src={link.imgSrc}
                                        alt={link.linkTo}
                                        className="h-7 w-7 md:h-9 md:w-9 object-contain"
                                    />
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Social;
