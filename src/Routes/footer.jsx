
import { Link } from "react-router-dom";

const Footer = () => {

    return(
        <div className="footer-container">
            <div className="footer-inner1">
            <Link><i class="fa-brands fa-facebook"></i></Link>
            <Link><i class="fa-brands fa-linkedin"></i></Link>
            <Link><i class="fa-brands fa-twitter"></i></Link>
            <Link><i class="fa-brands fa-instagram"></i></Link>
            </div>
            <div className="footer-inner2"></div>
            <div className="footer-inner3"></div>
        </div>
    )

};

export default Footer;