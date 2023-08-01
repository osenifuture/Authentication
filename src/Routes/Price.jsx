import { Link } from "react-router-dom";

const Price = () => {
  return (
    <>
      <div className="price-img">
        <h2>MAKE YOUR LIFE EASIER!</h2>
        <p>
          Do whatever you wish to do without leaving your home.Visit our site
          today
        </p>
      </div>
      <div className="price-container">
        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-briefcase"></i>
          <p>Bank Account Opening</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-satellite-dish"></i>
          <p>VSAT & CCTV Services</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-address-card"></i>
          <p> SIM Card Registration</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-person-circle-question"></i>
          <p> Lost Phone Trackking</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i className="fa-solid fa-user-graduate"></i>
          <p> UTME Registration</p>
        </Link>

        <Link to='/Service' className="price-link">
        <i class="fa-solid fa-holly-berry"></i>
          <p> House Decoration</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-id-card"></i>
          <p>NIN Registration</p>
        </Link>

        <Link to='/Servive' className="price-link">
          <i class="fa-solid fa-mobile"></i>
          <p> Phone Accessory </p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-money-bill-transfer"></i>
          <p>Electricity Bill</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-cake-candles"></i>
          <p> Event Planner</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-graduation-cap"></i>
          <p> Tuition Fees</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-stethoscope"></i>
          <p> Hospital Bill</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-car"></i>
          <p> Car Dealer</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-plane-departure"></i>
          <p>Hajj Prigrim</p>
        </Link>

        <Link to='/Service' className="price-link">
          <i class="fa-solid fa-tv"></i>
          <p> DSTV</p>
        </Link>
      </div>
    </>
  );
};

export default Price;
