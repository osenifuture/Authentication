import { Route, Routes } from "react-router-dom";
import Navbar from "./Nav/navbar";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Price from "./Routes/Price";
import SignIn from "./Auth/signIn";
import SignUp from "./Auth/signup";
import { useContext } from "react";
import { AuthContext } from "./Context/authContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
        {isLoggedIn ? (
      <Route path="/" element={<Navbar />}>
          <>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Price" element={<Price/>} />
          </>
        </Route>
        ) : (
          <>
            <Route index element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </>
        )}
    </Routes>
  );
}

export default App;
