import { useState } from "react";
import { Fragment } from "react";

const defaultForm = {
    fullName: '',
    address: '',
    phone: '',
    option: '',
    email: '',
    password: '',
    message: '',
    confirmpassword: ''
}
const Form = () => {
  const [formField, setformField] = useState(defaultForm);
  const {fullName, address, phone, option, email, password, message, confirmpassword} = formField;
  const [error, setError] = useState(false);
  const [show1, setshow1] = useState(false)
  const [show2, setshow2] = useState(false)
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setformField(defaultForm);
  };

  const successMessage = () => {
    setSuccess('Form is successfully submitted')
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  };

  const handleShowpassword1 = () => {
    setshow1(!show1)
  };

  const handleShowpassword2 = () => {
    setshow2(!show2)
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(fullName.length < 10) {
        setError('Full Name is required and at least 20 character');
    } else if(phone.length < 10) {
          setError('Phone Number is required and at least 11 digits');
    } else if(email.length === 0) {
          setError('A valid Email is required');
    } else if(address.length < 10) {
        setError('Address is reqiured and at least 10 character');
    } else if(option.length === 0) {
      setError('Please select service');
    } else if(message.length < 15) {
          setError('Message is required and at least 20 words');
    } else if(password.length === 0)  {
      setError('password is required and at least 6 character');
    } else if(confirmpassword.length === 0) {
      setError('Please confirm password')
    } else if(password !== confirmpassword) {
      setError('Wrong password');
    } else if(password.length < 6 || confirmpassword.length < 6) {
            setError('Weak password');
    } else  {
        try {
            const response = await fetch('https://getform.io/f/c7e042e9-60db-44e8-ace3-a3342ce6d287', {
              method: 'POST',
              headers: {
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify(formField)  
            })
            const responseData = await response.json()
            if(!response.ok) {
                throw new Error(responseData.message)
            }
            resetForm()
            successMessage()
            console.log(error.message)
            alert(error.message)
            
        } catch (error) {
           setError(error.message) 
        }}
    };


  const handleChange = (e) => {
    const {name, value} = e.target 
    setformField({...formField, [name] : value})
  };

    return(
      <>
      <div className="service-container">
        <div className="form-container">
            <h2 style={{margin: '5px'}}>SERVICE FORM</h2>
            <form onSubmit={handleSubmit}>
              
                <input type="text" name="fullName" placeholder="FULL NAME" value={fullName} onChange={handleChange} />
                <input type="number" name="phone" placeholder="PHONE NUMBER" value={phone} onChange={handleChange} />
                <input type="email" name="email" placeholder="EMAIL" value={email} onChange={handleChange} />
                <input type="text" name="address" placeholder="ADDRESS" value={address} onChange={handleChange} />
                <select name="option"  value={option} onChange={handleChange}>
                    <option value="Select Service">SELECT SERVICE</option>
                    <option value="Travelling Abroad">Travelling Abroad</option>
                    <option value="Tour">Tour</option>
                    <option value="Bank Account Opening">Bank Account Opening</option>
                    <option value="VSAT & CCTV Service">VSAT & CCTV Service</option>
                    <option value="SIM Card Registration">SIM Card Registration</option>
                    <option value="Lost Phone Tracking">Lost Phone Tracking</option>
                    <option value="UTME Registration">UTME Registration</option>
                    <option value="House Decoraton">House Decoraton</option>
                    <option value="Hajj Prigrim">Hajj Prigrim</option>
                    <option value="DSTV Suscription">DSTV Suscription</option>
                    <option value="Event Planner">Event Planner</option>
                    <option value="Electricity Bill">Electricity Bill</option>
                    <option value="Tuition fees">Tuition fees</option>
                    <option value="Car Dealer">Car Dealer</option>
                    <option value="Quick Transfer">Quick Transfer</option>
                    <option value="Airtime Data">Airtime Data</option>
                    <option value="Bulk SMS">Bulk SMS</option>
                    <option value="Logistic">Logistic</option>
                   
                </select>
                    <textarea name="message" placeholder="BRIEF DESCRIPTION OF SERVICE THAT YOU WANT" value={message} onChange={handleChange} ></textarea>
                    <div className="pass">
                <input  type={show1 ? "text"  : "password"} name="password" placeholder="PASSWORD" value={password} onChange={handleChange}  />
                    <span onClick={handleShowpassword1}>{ show1 ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i> }</span>
                    </div>
                    <div className="confirm-pass">
                <input type={show2 ? "text" : "password"}  name="confirmpassword" placeholder="CONFIRM PASSWORD" value={confirmpassword} onChange={handleChange} />
                <span onClick={handleShowpassword2}>{ show2 ? <i className="fa-solid fa-eye-slash"></i>  : <i className="fa-solid fa-eye"></i> }</span>
                    </div>
                {/* <span style={{display: "flex", }}>
                <input type="checkbox" onClick={handleShowpassword}/> 
                <p>{show ? "Hide passowrd" : "show password" }</p>
                </span> */}
                    <button>SUBMIT</button>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    {success && <p style={{ color: 'green'}}>{success}</p>}
            </form>   
        </div>
        </div>
        </>
    )
  };

export default Form;