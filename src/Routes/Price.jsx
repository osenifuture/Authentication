import { Link } from "react-router-dom";



const Price = () => {
    return(
        <>
        <div className="price-img">
            <h2>MAKE YOUR LIFE EASIER !</h2>
            <p>Do whatever you wish to do without leaving your home.Visit our site today</p>
        </div>
        <div className="price-container">
            <ul>
                <li>
            <Link className="price-link">
                <p>Electricity Bill</p>
                <i class="fa-solid fa-money-bill-transfer"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
               <p> DSTV</p>
               <i class="fa-solid fa-tv"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
               <p> Hospital Bill</p>
                <i class="fa-solid fa-stethoscope"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
               <p> Tuition Fees</p>
               <i class="fa-solid fa-graduation-cap"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
               <p> Jamb, UTME Registration</p>
                <i className="fa-solid fa-user-graduate"></i>
                 </Link>
                </li>
                <li>
            <Link className="price-link">
              <p> Phone Accessory  </p>
              <i class="fa-solid fa-mobile"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
               <p> Home Appliances</p>
                <i class="fa-solid fa-blender-phone"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
                <p>Latest Car</p>
                <i class="fa-solid fa-car"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
                <p>Hajj Pigrim</p>
                <i class="fa-solid fa-plane-departure"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
                <p>Bank Account Opening</p>
                <i class="fa-solid fa-briefcase"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
                <p>VSAT & CCTV Services</p>
                <i class="fa-solid fa-satellite-dish"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
               <p> SIM Card Registration</p>
                <i class="fa-solid fa-address-card"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
                <p>NIN Registration</p>
                <i class="fa-solid fa-id-card"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
              <p> Lost Phone Trackking</p>
              <i class="fa-solid fa-person-circle-question"></i>
                </Link>
                </li>
                <li>
            <Link className="price-link">
               <p> Event Planner</p>
                <i class="fa-solid fa-cake-candles"></i>
                </Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Price;