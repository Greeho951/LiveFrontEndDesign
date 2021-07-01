import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import HomeInfo from "../../components/HomeInfo/HomeInfo";
import Featured from "../../components/featured/Featured";
import BannerOne from "../../components/bannerOne/BannerOne";
import ServiceHomePage from "../../components/ServiceHomePage/ServiceHomePage";
import HomeAbout from "../../components/homeAbout/HomeAbout";
import RentBanner from "../../components/rentBanner/RentBanner";
import CarouselCard from "../../components/carousel/carousel";
// import CarouselCard from "../../components/carousel/Carousel";
import Referral from "../../components/referral/Referral";
import Footer from "../../components/footer/Footer";



export default function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Header/>
            <HomeInfo/>
            <Featured/>
            <BannerOne/>
            <ServiceHomePage/>
            <HomeAbout />
            <RentBanner/>
            <CarouselCard />
            <Referral/>
            <Footer/>
        </div>
    )
}
