import "./homeAbout.css";

export default function HomeAbout() {
    return (
        <div className="homeAbout container">
            <div className="row my-5">
                <div className="col-md-4">
                    <h3 className="homeAboutLeftTitle">What is Greeho.com</h3>
                    <p className="homeAboutLeftContent">Launched in 2020 during Covid 19, www.Greeho.com is Bangladesh’s newest property and facility management portal and...</p>
                    <span className="homeaboutIcon"><i className="fa fa-arrow-right"></i></span>
                </div>
                <div className="col-md-8">
                    <h1 className="homeAboutRightTitle text-end">Find a Home Inspector for Your Property</h1>
                    <p className="homeAboutRightContent text-end">Need to know your property value for sale or rent? Calculate the value of your property now with Greeho.com. Our experienced Home Inspector will estimate the closest value for your property.</p>
                    <div className="text-center">
                        <button className="btn-primary mt-3">Get Your Home Inspector Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}