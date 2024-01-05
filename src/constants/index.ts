export const navbar: {
    logo: { text: string; linkTo: string };
    navbarLinks: { text: string; linkTo: string }[];
} = {
    logo: {
        text: "Goodlyfe",
        linkTo: "#",
    },
    navbarLinks: [
        {
            text: "Classes",
            linkTo: "#",
        },
        {
            text: "Timetable",
            linkTo: "#",
        },
        {
            text: "Clubs",
            linkTo: "#",
        },
        {
            text: "Nutrition",
            linkTo: "#",
        },
        {
            text: "Free Trial",
            linkTo: "#",
        },
    ],
};

export const heroButton: {
    text: string;
    linkTo: string;
} = {
    text: "See the benefits",
    linkTo: "#",
};

export const subHeroButton: {
    text: string;
    linkTo: string;
} = {
    text: "View the FAQ",
    linkTo: "#",
};

export const subHero: {
    headerText: string;
    mainText: string;
    button: { buttonText: string; buttonLinkTo: string };
} = {
    headerText: "Meet your new body",
    mainText:
        "Embark on a transformative journey to discover newfound strength, redefine your limits, and sculpt a healthier, stronger you. Embrace change, unlock your potential.",
    button: {
        buttonText: "View the FAQ",
        buttonLinkTo: "#",
    },
};
