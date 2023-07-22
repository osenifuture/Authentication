import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

const defaultForm = {
    fullname: "",
    email: "",
    username: "",
    password: "",
    number: ""
}

const SignUp = () => {
    const [formField, setForm] = useState(defaultForm);
    const {fullname, email, username, password, number} = formField;
    const navigate = useNavigate()
    const {Login, Logout} = useContext(AuthContext)
    const resetForm = () => {
        setForm(defaultForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formField)
        resetForm()
        Logout()
        Login()
        navigate('/')
        
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...formField, [name] : value})
    }

    return(
        <div className="form-container">
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <input type="tex" placeholder="Fullname" name="fullname"  value={fullname} onChange={handleChange} required/>
                <input type="text" placeholder="Username" name="username" value={username} onChange={handleChange} required />
                <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required />
                <input type="number" placeholder="Phone" name="number" value={number} onChange={handleChange} required />
                <input type="password" placeholder="paasword" name="password" value={password} required onChange={handleChange} />
                <button>SEND</button>
                <p onClick={() => navigate('/')}>Member already? Login</p>
            </form>
        </div>
    )
}

export default SignUp