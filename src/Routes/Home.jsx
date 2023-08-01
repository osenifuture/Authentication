
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    
      <div className="home-img">
          <h2>MAKE YOUR LIFE EASIER !</h2>
        </div>
      
      <div className="home-container">
        <Link to="Service" className="home-link">
          <i class="fa-solid fa-right-left"></i>
          <p>Quick Transfer</p>
        </Link>

        <Link to="/Service" className="home-link">
          <i class="fa-solid fa-phone-volume"></i>
          <p>Airtime & Data</p>
        </Link>

        <Link to="/Service" className="home-link">
          <i class="fa-solid fa-comment-sms"></i>
          <p>Bulk SMS</p>
        </Link>

        <Link to="/Service" className="home-link">
          <i class="fa-solid fa-house"></i>
        <p>Office & Home Rentage</p>
        </Link>

        <Link to="/Service" className="home-link">
          <i class="fa-solid fa-car-side"></i>
          <p>Logistic</p>
        </Link>

        <Link to="/Service" className="home-link">
          <i class="fa-solid fa-plane"></i>
          <p>Travel Agent</p>
        </Link>

        <Link to="/Service" className="home-link">
          <i class="fa-solid fa-video"></i>
          <p>Video Editing</p>
        </Link>

        <Link to="/Service" className="home-link">
          <i class="fa-solid fa-sterling-sign"></i>
          <p>Currency Swap</p>
        </Link>

        <Link to="/Service" className="home-link">
          <i class="fa-solid fa-bitcoin-sign"></i>
          <p>Crypto Swap</p>
        </Link>
      </div>
    
        <Link to="/Price" className="more-link">
          <p>Click Here for More</p>
        </Link>

  
    </>
  );
};

export default Home;
