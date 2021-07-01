import "./navbar.css";
import Logo from "../../images/greehoLogo.png";


export default function Navbar() {
    return (
        <div className="navbar">
            <nav className="container">
            <div className="navbarLeft">
                <img className="navbarLogo" src={Logo} alt="logo"/>
            </div>
            <div className="navbarCenter">
                <ul className="navbarList">
                    <li className="navbarListItem">
                        <a href="" className="navbarActive">Home</a>
                    </li>
                    <li className="navbarListItem">
                        <a href="">Property</a>
                    </li>
                    <li className="navbarListItem">
                        <a href="">Service</a>
                    </li>
                    <li className="navbarListItem">
                        <a href="">About Us</a>
                    </li>
                    <li className="navbarListItem">
                        <a href="">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="navbarRight">
                <ul className="navbarList">
                    <li className="navbarListItem">
                        <a href="" className="navbarSignUp">Sign In</a>
                    </li>
                    <li className="navbarListItem">
                        <a href="" className="navbarAccount">Create Account</a>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}
