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

export const BecomeText: {
    headerText: string;
    mainText: string[];
    button: { buttonText: string; buttonLinkTo: string };
} = {
    headerText: "Become more than you are.",
    mainText: [
        `Staying active is great fun and keeps you healthy.`,
        `Check out how you can join in.`,
    ],
    button: {
        buttonText: "Let's do it!",
        buttonLinkTo: "#",
    },
};

export const facilitiesText: {
    headerText: string;
    mainText: string;
    button: { buttonText: string; buttonLinkTo: string };
} = {
    headerText: "Premium Facilities",
    mainText:
        "Train in a space designed for champions. Our premium facilities include top-tier equipment, spotless locker rooms, expert staff, and a motivating atmosphere to elevate your performance every single day.",
    button: {
        buttonText: "View the FAQ",
        buttonLinkTo: "#",
    },
};
