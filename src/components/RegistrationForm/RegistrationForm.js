import React, {useState} from 'react';
import './RegistrationForm.css';
import { withRouter } from "react-router-dom";

function RegistrationForm(props) {
    const [state , setState] = useState({
        firstname: "",
        lastname: "",
        email : "",
        phone:"",
        username:"",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = () => {
        var regex = /^[A-Za-z0-9 ]+$/
        var isValid = regex.test(document.getElementById("firstname").value);
        var isValid1 = regex.test(document.getElementById("lastname").value);
        var mobileRegex=/[0-9]{10}/
        var isValid2 = mobileRegex.test(document.getElementById("phone").value);
        var usernameRegex=/^[A-Za-z]+$/
        var isValid3=usernameRegex.test(document.getElementById("username").value);
        var passwordRegex=/^(?=\D*\d)(?=.*?[a-zA-Z]).*[\W_]/
        var isValid4=passwordRegex.test(document.getElementById("password").value);
       
        if(state.firstname===""||state.firstname===null||state.lastname===""||state.lastname===null){
            alert("First Name and Last Name cannot be blank");  
        }
        
        if(state.firstname.length>50||state.lastname.length>50)
        {
            alert("First Name and Last Name cannot be greater than 50 characters");
        }
        
        if(!isValid){
            alert("First Name has special characters");
        }

        if(!isValid1){
            alert("Last Name has special characters");
            
        }
        
        if(!isValid2){
            alert("Mobile Number must be equal to 10 digits");
        }
        
        if(state.username.length<5){
            alert("Username should have minimum 5 characters");
            
        }
        
        if(!isValid3){
            alert("Username can have only alphabets");
            
        }
        
        if(state.password.length<8){
            alert("Password should be minimum 8 characters");
            
        }
        
        if(!isValid4){
            alert("Password should have atleast 1 special character and 1 digit");
            
        }
        
    }
    const handleResetClick = () => {
        document.getElementById("myForm").reset();
    }
    return(
        <div className="card col-14 col-lg-6 login-card mt-5 hv-center">
            <form id="myForm">
            <h1 className="form-group text-center text-uppercase mt-3 mb-5">Registration Form</h1>
            <div className="form-group text-left">
                    <label htmlFor="exampleInputFirstName1">First Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="firstname" 
                        placeholder="First Name"
                        //pattern="[a-zA-Z]"
                        value={state.firstname}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputLastName1">Last Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="lastname" 
                        placeholder="Last Name"
                        //pattern="[a-zA-Z]"
                        value={state.lastname}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                       required
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPhone1">Phone Number</label>
                    <input type="tel" 
                        className="form-control" 
                        id="phone" 
                        placeholder="Phone"
                        pattern="[0-9]{10}"
                        value={state.phone}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputUserName1">Username</label>
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Username"
                        value={state.username}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary mr-2"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
                <button 
                    type="submit" 
                    className="btn btn-danger"
                    onClick={handleResetClick}
                >
                    Reset
                </button>
            </form>
            <div className="mt-2 mb-5">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
        </div>
    )
}

export default withRouter(RegistrationForm);