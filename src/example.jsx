import { Link, Outlet} from "react-router-dom";
import { Fragment, useContext } from "react";
import { AuthContext } from "../Context/authContext";



const Bar = () => {
    const {isLoggedIn} = useContext(AuthContext)
    return(
        <Fragment>
        <div className="nav-container">
            <Link to='/' className="logo">
                <p>WesttyCode</p>
            </Link>
            <div className="nav-links">
                    {
                        isLoggedIn && (
                            <>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/About" className="link">About</Link>
                    <Link to="/Price" className="link">Pricing</Link>
                            </>
                        )
                    }
                    <Link to='/SignIn' className="link">Sign in</Link>
                    <Link to='/SignUp' className="link">Sign up</Link>
            </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Bar;



// import { Route, Routes } from "react-router-dom";
// import Navbar from "./Nav/navbar";
// import Home from "./Routes/Home";
// import About from "./Routes/About";
// import Price from "./Routes/Price";
// import SignIn from "./Auth/signIn";
// import SignUp from "./Auth/signup";
// import { useContext } from "react";
// import { AuthContext } from "./Context/authContext";

// function App() {
//   const { isLoggedIn } = useContext(AuthContext);

//   return (
//     <Routes>
//       <Route path="/" element={<Navbar />}>
//         {isLoggedIn ? (
//           <>
//             <Route index element={<Home />} />
//             <Route path="/About" element={<About />} />
//             <Route path="/Price" element={<Price />} />
//           </>
//         ) : (
//           <>
//             <Route index element={<SignIn />} />
//             <Route path="/SignUp" element={<SignUp />} />
//           </>
//         )}
//       </Route>
//     </Routes>
//   );
// }

// export default App;
