import { Link, Outlet, useNavigate} from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";



const Navbar = () => {
    const {Logout} = useContext(AuthContext);
    const navigate = useNavigate()
    const [ismobile, setIsmobile] = useState(false)

    const handleLogout = () => {
        Logout()
        navigate('/')
    };

    const handleMenu = () => {
        setIsmobile(!ismobile)
    };

    const closeMenu = () => {
        setIsmobile(false)
    }


    return(
        <Fragment>
        <div className="nav-container">
           <div className="mobile-menu" onClick={handleMenu}>
            {
                ismobile ? <i className="fa-solid fa-xmark"></i> :<i className="fa-solid fa-bars"></i>
            }
           </div>

            <Link to='/' className="logo">
                <i className="fa-brands fa-wordpress"></i>
                <p>WesttyCode</p>
            </Link>
            <div className={ismobile ? 'mobile-link' : 'nav-link'} onClick={closeMenu}>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/About" className="link">About</Link>
                    <Link to="/Price" className="link">Pricing</Link>
            </div>

           <span onClick={handleLogout}>
            Logout
            <i className="fa-solid fa-power-off" onClick={handleLogout}></i>   
           </span>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navbar;