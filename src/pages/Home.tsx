import Hero from "../components/Hero";
import SubHero from "../components/SubHero";

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Hero />
            <SubHero />
        </div>
    );
};

export default Home;
