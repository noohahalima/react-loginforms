import React, {useState} from 'react';
import './LoginForm.css';
import { withRouter } from "react-router-dom";

function LoginForm(props) {
    const [state , setState] = useState({
        username : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = () => {
        var usernameRegex=/^[A-Za-z]+$/
        var isValid3=usernameRegex.test(document.getElementById("username").value);
        var passwordRegex=/^(?=\D*\d)(?=.*?[a-zA-Z]).*[\W_]/
        var isValid4=passwordRegex.test(document.getElementById("password").value);
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
        else{
        props.history.push('/home');
        props.updateTitle('Home');
    }
}
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
            <h1 className="form-group text-center text-uppercase mt-3 mb-5">Login Form</h1>
                <div className="form-group text-left">
                <label htmlFor="exampleInputUsername1">Username</label>
                <input type="text" 
                       className="form-control" 
                       id="username" 
                       placeholder="Enter username" 
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
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={() => handleSubmitClick()}
                >Submit</button>
            </form>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div>
        </div>
    )
}

export default withRouter(LoginForm);