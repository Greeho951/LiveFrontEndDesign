import React, { useState } from 'react';

import "./header.css";
import Cover from "../../images/cover.png";

export default function Header() {
    const [searchCriteria, setSearchCriteria] = useState(1);

    return (
        <div className="header container">
            <div className="headerContent">
                <img src={Cover} alt="header" className="headerImg"/>
                <span className="headerTitle">YOUR LOCAL <br/> REAL ESTATE <br/>PROFESSIONALS</span>
                <div className="headerClick">
                    <span className="headerClickItem"><button href="" className={searchCriteria === 1 ? 'headerClickItem active' : 'headerClickItem'} onClick={() => setSearchCriteria(1)}>Rent</button></span>
                    <span className="headerClickItem"><button href="" className={searchCriteria === 2 ? 'headerClickItem active' : 'headerClickItem'} onClick={() => setSearchCriteria(2)}>Sale</button></span>
                    <span className="headerClickItem"><button href="" className={searchCriteria === 3 ? 'headerClickItem active' : 'headerClickItem'} onClick={() => setSearchCriteria(3)}>Service</button></span>
                </div>
                <div className="headerSearchBar">
                    <div className="search-box">
                        <form>
                            <input type="text" placeholder={searchCriteria === 3 ? 'Search by keyword' : 'Search by address or area'} />
                            <i className={searchCriteria === 3 ? 'fas fa-chevron-circle-down' : 'fas fa-search'}></i>
                        </form>
                    </div>
                    <div className="headerPostAd">
                        <button className="post-ad-btn">POST YOUR AD</button>
                    </div>
                </div>
                <p className="header-query-number"> For Any Query please contact 01938000300 </p>
            </div>
        </div>
    )
}
