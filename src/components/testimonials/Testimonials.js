import React from 'react';
import "./testimonials.css";
import Service from "../../images/service.png";

const Testimonials = (props) => {
    return (
        <div className="testimonials">
            <div className="row testimonialsRow text-center ml-5">
                <div className="col-md-4 pb-5">
                    <div className={props.middleCard ? 'card rivew-card active' : 'card rivew-card'}>
                        <p className="review-comment">“গৃহের কাছ থেকে যথারীতি ভালোই সার্ভিস পেয়েছি। আমি গৃহের সার্ভিস পেয়ে খুশি। ভবিষ্যতে গৃহের কাছ থেকে সার্ভিস নিব।”</p>
                        <h3 className="card-review-name">MD. Ashfaq Islam</h3>
                        <img src={Service} alt="" className="reviewImg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;