import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Discover from "./Discover";
import FeaturedProperties from "./FeaturedProperties";
import Inquiry from "./Inquiry";

export default function Home() {
    return (
        <>
            <Banner></Banner>
            <FeaturedProperties></FeaturedProperties>
            <ChooseUs></ChooseUs>
            <Discover></Discover>
            <Inquiry></Inquiry>
        </>
    )
}