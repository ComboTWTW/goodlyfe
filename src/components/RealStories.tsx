import { quotMark } from "../assets";
import { realStoriesText } from "../constants";
import TestimonialCard from "./RealStories/TestimonialCard";

const RealStories = () => {
    const [firstCard, ...restCards] = realStoriesText.cards;

    return (
        <section
            className="
            poppins
            w-full 
            flex 
            justify-center
            
            bg-gradient-to-b 
            from-white 
            to-lightPink
            
        "
        >
            <div
                className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-8
                max-w-5xl
                w-full
                px-6
                
            mt-[116px] 
            
            mb-[100px] 
            "
            >
                {/* Left column */}
                <div
                    className="
                    flex
                    flex-col
                    
                    gap-12
                "
                >
                    {/* Headers Blocks */}
                    <div>
                        <h2
                            className="
                            text-5xl
                            font-semibold
                            text-textGray
                        "
                        >
                            Real Stories from
                            <br />
                            Real Customers
                        </h2>

                        <p
                            className="
                            mt-4
                            text-textGray
                        "
                        >
                            Be inspired with these experiences.
                        </p>
                    </div>
                    {/* First Card */}
                    <div className="lg:max-w-[350px] lg:self-end">
                        <TestimonialCard {...firstCard} />
                    </div>
                </div>

                {/* Right column */}
                <div
                    className="
                    flex
                    flex-col
                    gap-8
                    lg:pt-16
                "
                >
                    {restCards.map((card, index) => (
                        <div
                            className={`${index === 1 ? "lg:max-w-[350px]" : "lg:max-w-[449px]"}`}
                        >
                            <TestimonialCard
                                key={card.cardPersonName}
                                {...card}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealStories;
