import React from 'react';
import logo from './greehoLogoFooter.png';
import background from './fbg.jpg';
import './footer.css';

const Footer = () => (
    <div className="footer-container footer-img-bg mt-5 footer" style={{ backgroundImage: `url(${background})` }}>
        <footer className="container page-footer font-small blue pt-4 mt-5 my-3">
        <div className="container-fluid text-left text-md-left">
            <div className="row">
            <div className="col-md-3">
                <a className="" href="google.com">
                    <img src={logo} className="" alt="" />
                </a>
                <div className="titles">A Tool For Landlords &amp; Tenants</div>
                <div className="">
                <h5 className="titles mt-4">Contact Us</h5>
                <hr className="underline"></hr>
                <ul className="list-unstyled titles">
                <li><i className="fas fa-location-arrow px-3"></i><span className="">House 52 Road 02 Block L Banani02</span></li>
                <li><i className="fas fa-phone-alt px-3"></i><span >01938000300</span></li>
                <li><i className="fas fa-envelope px-3"></i><span>info@greeho.com</span></li>
                <li className="social-icon-footer mt-2">
                    <a href=""><i class="fab fa-instagram "></i></a> 
                    <a href=""><i class="fab fa-twitter "></i></a> 
                    <a href=""><i class="fab fa-facebook"></i></a>
                </li>
                </ul>
                
            </div>
            </div>
            <div className="col-md-3">
                <h5 className="titles">Company</h5>
                <hr className="underline"></hr>
                <ul className="list-unstyled">
                <li>
                    <a href="#!" className="items">About Us</a>
                </li>
                <li>
                    <a href="#!" className="items">Contact Us</a>
                </li>
                <li>
                    <a href="#!" className="items">Career</a>
                </li>
                <li>
                    <a href="#!" className="items">Terms &amp; Conditions</a>
                </li>
                <li>
                    <a href="#!" className="items">Report A Problem</a>
                </li>
                <li>
                    <a href="#!" className="items">Privacy Policy</a>
                </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h5 className="titles">Popular Searches For Properties</h5>
                <hr className="underline"></hr>
                <ul className="list-unstyled">
                    <li><a href="#!" className="items">Flat For Rent Banani</a></li>
                    <li><a href="#!" className="items">Flat For Rent Gulshan</a></li>
                    <li><a href="#!" className="items">Flat For Rent Uttara</a></li>
                    <li><a href="#!" className="items">Flat For Rent Basundhara</a></li>
                    <li><a href="#!" className="items">Flat For Rent Dhanmondi</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <h5 className="titles">Popular Searches For Services</h5>
                <hr className="underline"></hr>
                <ul className="list-unstyled">
                    <li><a href="#!" className="items">AC Fixing Service</a></li>
                    <li><a href="#!" className="items">Appliance Fixing</a></li>
                    <li><a href="#!" className="items">Cleaning Service</a></li>
                    <li><a href="#!" className="items">Electrical &amp; CCTV Camera Service</a></li>
                    <li><a href="#!" className="items">Furniture Fixing &amp; Uphoistery</a></li>
                    <li><a href="#!" className="items">Garden &amp; Plant Service</a></li>
                    <li><a href="#!" className="items">Movers &amp; Shifting Service</a></li>
                    <li><a href="#!" className="items">Plumbing Diagnosis &amp; Repair</a></li>
                </ul>
            </div>
            </div>
        </div>
       </footer>
       <div className="footer-copyright text-left py-2 px-5 footer-bottom">All rights reserved ©Greeho.com</div>
    </div>
);

export default Footer;
