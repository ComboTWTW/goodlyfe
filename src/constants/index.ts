import {
    googleButton,
    appStoreButton,
    person1,
    person2,
    person3,
} from "../assets";

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

export const realStoriesText: {
    headerText: string;
    subHeaderText: string;
    cards: {
        cardHeader: string;
        cardText: string;
        cardPersonName: string;
        cardPesronImage: string;
    }[];
} = {
    headerText: "Real Stories from Real Customers",
    subHeaderText: "Be inspired with these experiences.",
    cards: [
        {
            cardHeader: "43Kg lost!",
            cardText:
                "I never imagined losing 43 kg was possible until I joined this gym. The trainers believed in me from day one, every workout had a clear purpose, and the support kept me motivated.",
            cardPersonName: "James John",
            cardPesronImage: person1,
        },
        {
            cardHeader: "17Kg lost!",
            cardText:
                "Losing 17 kg has been an incredible journey. Every coach encouraged me to stay consistent, the workouts were challenging yet enjoyable. I couldn't be happier with my progress.",
            cardPersonName: "Mary Patricia",
            cardPesronImage: person2,
        },
        {
            cardHeader: "3Kg lost!",
            cardText:
                "The welcoming atmosphere, great coaching, and enjoyable workouts made staying active easier than ever.",
            cardPersonName: "Robert Micheal",
            cardPesronImage: person3,
        },
    ],
};

export const ourAppText: {
    header: string;
    mainText: string;
    links: {
        linksHeader: string;
        linksArr: { imgSrc: string; linkTo: string }[];
    };
} = {
    header: "Don’t forget our app",
    mainText:
        "Track your workouts and reach your fitness goals faster with our official mobile app. Access customized training plans, log your daily meals, and book gym classes instantly from anywhere.",
    links: {
        linksHeader: "Download now:",
        linksArr: [
            { linkTo: "#", imgSrc: googleButton },
            { linkTo: "#", imgSrc: appStoreButton },
        ],
    },
};
