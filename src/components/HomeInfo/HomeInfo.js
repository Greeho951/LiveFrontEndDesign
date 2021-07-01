import "./homeInfo.css";
import HomeVector from "../../images/icons/homeVector.png";
import HomeVector1 from "../../images/icons/homeVector1.png";
import HomeVector2 from "../../images/icons/homeVector2.png";
import HomeVector3 from "../../images/icons/homeVector3.png";

export default function HomeInfo() {
    return (
        <div className="homeInfo container">
            <div className="homeInfoItem">
                <div className="homeInfoItemT">
                <img src={HomeVector3} alt="icon" className="homeInfoIcon"/>
                <p className="homeInfoTitle">Find Your Dream Home</p>
                </div>
                <p className="homeInfoP">We Provide Various Types Of Houses From The Cheapest To Premium</p>
            </div>
            <div className="homeInfoItem">
                <div className="homeInfoItemT">
                <img src={HomeVector1} alt="icon" className="homeInfoIcon"/>
                <p className="homeInfoTitle">Find Best tenant for your property</p>
                </div>
                <p className="homeInfoP">You Will Get The Best Tenant For Your Property</p>
            </div>
            <div className="homeInfoItem">
                <div className="homeInfoItemT">
                <img src={HomeVector2} alt="icon" className="homeInfoIcon"/>
                <p className="homeInfoTitle">100% Safe Transaction</p>
                </div>
                <p className="homeInfoP">Your Transactions Will Allways Be Kept Confidential and Will Get Discounted</p>
            </div>
            <div className="homeInfoItem">
                <div className="homeInfoItemT">
                <img src={HomeVector2} alt="icon" className="homeInfoIcon"/>
                <p className="homeInfoTitle">Get the Best Household Services</p>
                </div>
                <p className="homeInfoP">You Will Find All Kinds of Household Services at the Best Price</p>
            </div>
        </div>
    )
}
