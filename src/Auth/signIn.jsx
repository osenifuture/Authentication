import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

const defaultForm = {
    email: "",
    password: "",
}

const SignIn = () => {
    const [formField, setForm] = useState(defaultForm);
    const { email, password} = formField;
    const naviagte = useNavigate()
    const {Login}  = useContext(AuthContext)
    const resetForm = () => {
        setForm(defaultForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formField)
        resetForm()
        Login()
        naviagte('/')
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...formField, [name] : value})
    }

    const handleNav = () => {
        naviagte('/SignUp')
    }
    return(
        <div className="form-container">
        <h1>SIGN IN</h1>
        <form onSubmit={handleSubmit}>
            <p>Welcome Back!</p>
            <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required />
            <input type="password" placeholder="paasword" name="password" value={password} onChange={handleChange} required />
            <button>Login</button>
            <p onClick={handleNav}>Not Register yet? </p>
        </form>
    </div>
    )
}

export default SignIn