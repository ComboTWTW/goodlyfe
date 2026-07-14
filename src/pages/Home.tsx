import Become from "../components/Become";
import Hero from "../components/Hero";
import PremiumFacilities from "../components/PremiumFacilities";
import RealStories from "../components/RealStories";
import SubHero from "../components/SubHero";

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Hero />
            <SubHero />
            <Become />
            <PremiumFacilities />
            <RealStories />
        </div>
    );
};

export default Home;
