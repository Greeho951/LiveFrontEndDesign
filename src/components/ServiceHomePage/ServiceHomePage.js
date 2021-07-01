import "./serviceHomePage.css";
import serviceVector from "../../images/serviceVector.png";

export default function ServiceHomePage() {
    return (
        <div className="serviceHomePage container">
            <div className="row">
                <div className="col-md-3">
                    <div className="serviceHomePageLeft">
                        <span className="serviceNameLeft">SERVICES</span>
                        <h5 className="serviceTitleLeft">Our Most Popular Household Services For You</h5>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                        <div className="col-md-2 my-2">
                            <div className="card serviceHomePageCard">
                                <img src={serviceVector} alt="service image" className="serviceHomePageCardImg" />
                                <p className="serviceCardCatName">Appliance Fixing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
