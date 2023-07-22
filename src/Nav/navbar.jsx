import { Link, Outlet, useNavigate} from "react-router-dom";
import { Fragment, useContext } from "react";
import { AuthContext } from "../Context/authContext";



const Navbar = () => {
    const {Logout} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        Logout()
        navigate('/')
    }
    return(
        <Fragment>
        <div className="nav-container">
            <Link to='/' className="logo">
                <p>WesttyCode</p>
            </Link>

            <div className="nav-links">
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