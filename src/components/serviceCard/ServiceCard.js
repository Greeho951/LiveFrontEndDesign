import "./serviceCard.css";
import Service from "../../images/service.png";

export default function ServiceCard() {
    return (
        <div className="serviceCard">
            <div className="row">
                <div className="col-md-4">
                    <div className="card serviceCardBg">
                     <img src={Service} alt="service-img" className="serviceCardImg" />
                     <div className="serviceTopItem">
                        <div className="serviceTitle">
                        <strong>AC SERVICE</strong>
                        </div>
                        <div className="servicePrice">
                            <span className="servicePriceTitle">Staring From</span>
                            <strong className="serviceTk">1500<span className="serviceBDT">BDT</span></strong>
                        </div>
                    </div>
                    <div className="serviceCat">
                        <ul className="serviceCatItem">
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                        </ul>
                    </div>
                    <div className="serviceFooter">
                        <div className="serviceFooterLeft">
                            <span>Add more..</span>
                        </div>
                        <div className="serviceFooterright">
                            <button className="serviceOrderBtn">Order Now</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card serviceCardBg">
                     <img src={Service} alt="service-img" className="serviceCardImg" />
                     <div className="serviceTopItem">
                        <div className="serviceTitle">
                        <strong>AC SERVICE</strong>
                        </div>
                        <div className="servicePrice">
                            <span className="servicePriceTitle">Staring From</span>
                            <strong className="serviceTk">1500<span className="serviceBDT">BDT</span></strong>
                        </div>
                    </div>
                    <div className="serviceCat">
                        <ul className="serviceCatItem">
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                        </ul>
                    </div>
                    <div className="serviceFooter">
                        <div className="serviceFooterLeft">
                            <span>Add more..</span>
                        </div>
                        <div className="serviceFooterright">
                            <button className="serviceOrderBtn">Order Now</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card serviceCardBg">
                     <img src={Service} alt="service-img" className="serviceCardImg" />
                     <div className="serviceTopItem">
                        <div className="serviceTitle">
                        <strong>AC SERVICE</strong>
                        </div>
                        <div className="servicePrice">
                            <span className="servicePriceTitle">Staring From</span>
                            <strong className="serviceTk">1500<span className="serviceBDT">BDT</span></strong>
                        </div>
                    </div>
                    <div className="serviceCat">
                        <ul className="serviceCatItem">
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                            <li className="serviceCatList">Family Home Shifting</li>
                        </ul>
                    </div>
                    <div className="serviceFooter">
                        <div className="serviceFooterLeft">
                            <span>Add more..</span>
                        </div>
                        <div className="serviceFooterright">
                            <button className="serviceOrderBtn">Order Now</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
