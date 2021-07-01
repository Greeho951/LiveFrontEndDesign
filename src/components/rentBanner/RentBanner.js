import React from 'react';
import './rentBanner.css';

import houseForRent from './HouseForRent.png';

const RentBanner = () => {
    return (
        <div className="container">
            <hr className="rentBanner-hr"/>
            <div className="row padding d-flex">
                <div className="col-lg-8 col-sm-12 d-flex align-items-start flex-column" id="banner-text">
                    <p className="rentBannerContent" >
                        Over 10,000 Flats, Waiting for you!<br />
                        Rent Your Desired Home With Greeho.com
                    </p>
                    <button className="btn-primary">Search Now For Rent</button>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid" src={houseForRent} alt="Animated house picture" />
                </div>
            </div>
            <hr className="rentBanner-hr"/>
        </div>
    );
    }
export default RentBanner;

