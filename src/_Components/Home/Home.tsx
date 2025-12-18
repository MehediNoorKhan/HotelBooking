import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Discover from "./Discover";
// import FeaturedProperties from "./FeaturedProperties";
import Inquiry from "./Inquiry";
// import propertiesData from "../../data/featuredProperties.json";


export default function Home() {
    return (
        <>
            <Banner></Banner>
            {/* <FeaturedProperties properties={} title={"Featured Properties"} subTitle={"Handpicked apartments that embody sophistication and comfort in New York's most prestigious locations."}></FeaturedProperties> */}
            <ChooseUs></ChooseUs>
            <Discover></Discover>
            <Inquiry></Inquiry>
        </>
    )
}