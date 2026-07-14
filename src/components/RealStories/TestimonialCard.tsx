import { quotMark } from "../../assets";
import RealStories from "../RealStories";

interface Props {
    cardHeader: string;
    cardText: string;
    cardPersonName: string;
    cardPesronImage: string;
}

const TestimonialCard = ({
    cardHeader,
    cardText,
    cardPersonName,
    cardPesronImage,
}: Props) => {
    return (
        <article className=" rounded-2xl bg-white p-8 shadow-md">
            {/* Header How Much Lost */}
            <h3 className=" text-4xl font-semibold text-pink-500">
                {cardHeader}
            </h3>
            {/* Quot Mark and Main text */}
            <div className="flex gap-2">
                <img
                    src={quotMark}
                    alt="quot mark"
                    className="max-w-[29px] self-start mt-6"
                />
                <div className="flex flex-col">
                    <p className=" mt-6 text-textGray leading-8">{cardText}</p>
                    {/* Profile Pic and Name */}
                    <div className=" mt-6 flex items-center gap-4">
                        <div className="h-[54px] w-[54px] ">
                            <img
                                src={cardPesronImage}
                                className=" w-full h-full rounded-full object-cover"
                            />
                        </div>

                        <div>
                            <p className="font-semibold text-textGray">
                                {cardPersonName}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default TestimonialCard;
