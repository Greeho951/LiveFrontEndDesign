import "./propCard.css";
import WishLove from "../../images/icons/wishLove.png";
import Prop from "../../images/prop.png";
import Bed from "../../images/icons/bed.png"
import Bath from "../../images/icons/bath.png"
import Sqrf from "../../images/icons/sqrf.png"
import Floor from "../../images/icons/floor.png"
import Lift from "../../images/icons/lift.png"

export default function PropCard() {
    return (
        <div className="propCard">
            <div className="row">
                <div className="col-md-4 ">
                    <div className="card propCardBg ">
                        <img src={Prop} alt="prop-img" className="propCardImg" />
                        <div className="propTopItem">
                            <div className="propPrice">
                                <strong>54,500,000</strong><span className="propBDT">BDT</span>
                            </div>
                            <div className="propType">
                            <strong>For Sale</strong>
                            </div>
                        </div>
                        <div className="propCardContent row">
                            <div className="propCardItemLeft col-md-9">
                                <ul className="propCardLeltItem">
                                    <li className="propTile">Residential Flat In Block C, Bashundhara</li>
                                    <li className="propCardLeftItemList">Bashundhara R/A</li>
                                    <li className="propCardLeftItemList">Family</li>
                                </ul>
                            </div>
                            <div className="propCardItemRight col-md-3">
                                <span><a href=""><img src={WishLove} alt="wish-icon" className="propwishIcon"/></a></span>
                            </div>
                        </div>
                        <div className="propFooter">
                            <div className="propFooterItem">
                                <img src={Bed} alt="prop-img" className="propIcon" />
                                <span>3</span> 
                                <span>Bed</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Bath} alt="prop-img" className="propIcon" />
                                <span>3</span> 
                                <span>Bath</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Sqrf} alt="prop-img" className="propIcon" />
                                <span>1200</span> 
                                <span>SqFt</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Floor} alt="prop-img" className="propIcon" />
                                <span>3rd</span> 
                                <span>Floor</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Lift} alt="prop-img" className="propIcon" />
                                <span><i class="fas fa-clipboard-check"></i></span> 
                                <span>Lift</span> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 ">
                    <div className="card propCardBg ">
                        <img src={Prop} alt="prop-img" className="propCardImg" />
                        <div className="propTopItem">
                            <div className="propPrice">
                                <strong>54,500,000</strong><span className="propBDT">BDT</span>
                            </div>
                            <div className="propType">
                            <strong>For Sale</strong>
                            </div>
                        </div>
                        <div className="propCardContent row">
                            <div className="propCardItemLeft col-md-9">
                                <ul className="propCardLeltItem">
                                    <li className="propTile">Residential Flat In Block C, Bashundhara</li>
                                    <li className="propCardLeftItemList">Bashundhara R/A</li>
                                    <li className="propCardLeftItemList">Family</li>
                                </ul>
                            </div>
                            <div className="propCardItemRight col-md-3">
                                <span><a href=""><img src={WishLove} alt="wish-icon" className="propwishIcon"/></a></span>
                            </div>
                        </div>
                        <div className="propFooter">
                            <div className="propFooterItem">
                                <img src={Bed} alt="prop-img" className="propIcon" />
                                <span>3</span> 
                                <span>Bed</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Bath} alt="prop-img" className="propIcon" />
                                <span>3</span> 
                                <span>Bath</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Sqrf} alt="prop-img" className="propIcon" />
                                <span>1200</span> 
                                <span>SqFt</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Floor} alt="prop-img" className="propIcon" />
                                <span>3rd</span> 
                                <span>Floor</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Lift} alt="prop-img" className="propIcon" />
                                <span><i class="fas fa-clipboard-check"></i></span> 
                                <span>Lift</span> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 ">
                    <div className="card propCardBg ">
                        <img src={Prop} alt="prop-img" className="propCardImg" />
                        <div className="propTopItem">
                            <div className="propPrice">
                                <strong>54,500,000</strong><span className="propBDT">BDT</span>
                            </div>
                            <div className="propType">
                            <strong>For Sale</strong>
                            </div>
                        </div>
                        <div className="propCardContent row">
                            <div className="propCardItemLeft col-md-9">
                                <ul className="propCardLeltItem">
                                    <li className="propTile">Residential Flat In Block C, Bashundhara</li>
                                    <li className="propCardLeftItemList">Bashundhara R/A</li>
                                    <li className="propCardLeftItemList">Family</li>
                                </ul>
                            </div>
                            <div className="propCardItemRight col-md-3">
                                <span><a href=""><img src={WishLove} alt="wish-icon" className="propwishIcon"/></a></span>
                            </div>
                        </div>
                        <div className="propFooter">
                            <div className="propFooterItem">
                                <img src={Bed} alt="prop-img" className="propIcon" />
                                <span>3</span> 
                                <span>Bed</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Bath} alt="prop-img" className="propIcon" />
                                <span>3</span> 
                                <span>Bath</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Sqrf} alt="prop-img" className="propIcon" />
                                <span>1200</span> 
                                <span>SqFt</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Floor} alt="prop-img" className="propIcon" />
                                <span>3rd</span> 
                                <span>Floor</span> 
                            </div>
                            <div className="propFooterItem">
                                <img src={Lift} alt="prop-img" className="propIcon" />
                                <span><i class="fas fa-clipboard-check"></i></span> 
                                <span>Lift</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
