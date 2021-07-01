import React, { useState } from 'react';

import PropCard from "../propCard/PropCard";
import ServiceCard from "../serviceCard/ServiceCard";
import "./featured.css";

export default function Featured() {
    const [toggle, setToggle] = useState(true);
    return (
        <div className="featured container">
            <div>
                <h6 className="featured-title">Featured</h6>
                <ul className="featured-list">
                    <li className="featured-item"><button className={toggle ? 'featureButton active' : 'featureButton'} onClick={() => setToggle(true)}>Property</button></li>
                    <li className="featured-item"><button className={toggle ? 'featureButton' : 'featureButton active'} onClick={() => setToggle(false)}>Service</button></li>
                </ul>
                <hr className="feature-hr"/>
            </div>
            {toggle ? <PropCard /> : <ServiceCard/>}
        </div>
    )
}

