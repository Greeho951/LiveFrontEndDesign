import "./bannerOne.css";
import BannerOneImg from "../../images/bannerOne.png";

export default function BannerOne() {
    return (
        <div className="bannerOne container">
            <div className="banner-image">
            <img src={BannerOneImg} class="img-fluid" alt="..." />
            </div>
        </div>
    )
}
