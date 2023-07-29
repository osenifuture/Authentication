import "./home.css"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
        <div className="home-img">
            <div className="easy-con">
                <h2>MAKE YOUR LIFE EASIER !</h2>
            </div>
        </div>

            <div className="home-container">
                <div className="home-box">
                    <i class="fa-solid fa-right-left"></i>
                    <p>Quick Transfer</p>
                </div>
                <div className="home-box">
                    <i class="fa-solid fa-phone-volume"></i>
                    <p>Airtime & Data</p>
                </div>
                <div className="home-box">
                    <i class="fa-solid fa-comment-sms"></i>
                    <p>Bulk SMS</p>
                </div>
                <div className="home-box">
                    <i class="fa-solid fa-house"></i>
                    <p>Offices Rentage</p>
                </div>
                <div className="home-box">
                    <i class="fa-solid fa-car-side"></i>
                    <p>Logistic</p>
                </div>
                <div className="home-box">
                    <i class="fa-solid fa-plane"></i>
                    <p>Travelling Agent</p>
                </div>
                <div className="home-box">
                    <i class="fa-solid fa-video"></i>
                    <p>Video Editing</p>
                </div>
                <div className="home-box">
                    <i class="fa-solid fa-sterling-sign"></i>
                    <p>Currency Swap</p>
                </div>
                <div className="home-box">
                    <i class="fa-solid fa-bitcoin-sign"></i>
                    <p>Crypto Swap</p>
                </div>
            </div>
            <div className="more">
                <Link to='/Price' className="more-link"><p>Click Here for More</p></Link>
            </div>
        </>
    )
}

export default Home;