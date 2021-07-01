import React from 'react';
import './referral.css';
import img1 from './linkPic.png';
import img2 from './sharePic.png';
import img3 from './rewardPic.png';

const Referral = () => {
    return (
            <div className="container">
                <div class="row text-center pt-5">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <img className="img-fluid" src={img1} alt="" />
                        <h3 className="referralTitle">1. Get Your Link</h3>
                        <p className="referralContent">Generate a referral link</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <img className="img-fluid" src={img2} alt="" />
                        <h3 className="referralTitle">2. Invite Friends</h3>
                        <p className="referralContent">Invite your friends to register 
                            through the referral link and get 
                            rewards once they complete a trade</p>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <img className="img-fluid" src={img3} alt="" />
                        <h3 className="referralTitle">3. Get Rewards</h3>
                        <p className="referralContent">Receive up to 20% off on your service order</p>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn-primary mt-3">GET YOUR PERSONAL REFERRAL LINK</button>
                </div>
                	
            </div>
    );
    }
export default Referral;

