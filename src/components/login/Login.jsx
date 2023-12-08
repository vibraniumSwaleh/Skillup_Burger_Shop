// Write all the code here
import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const demoUser = {
        email: "user@gmail.com",
        password: "user123"
    };

    const handleSignIn = () => {
        if (email === demoUser.email && password === demoUser.password) {
            // Successful sign-in, redirect to '/'
            window.location.href = '/';
        } else {
            // Handle invalid credentials, show error message, etc.
            console.log("Invalid credentials");
        }
    };

    return (
        <div className="container p-5">
            <div className="row p-2">
                <div className="col">
                    <button className="btn btn-secondary w-100" type="button">LOGIN</button>
                </div>
                <div className="col">
                    <button className="btn btn-outline-secondary w-100" type="button">REGISTER</button>
                </div>
            </div>
            <div className="d-flex justify-content-center p-2">
                <div>
                    <p className="m-0">Sign in with:</p>
                </div>
            </div>
            <div className="d-flex justify-content-evenly p-2">
                <a href="#" className="link-primary"><i className="bi bi-facebook"></i></a>
                <a href="#" className="link-primary"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="link-primary"><i className="bi bi-google"></i></a>
                <a href="#" className="link-primary"><i className="bi bi-github"></i></a>
            </div>
            <div className="d-flex justify-content-center p-2">
                <p className="m-0">or:</p>
            </div>
            <div className="p-2">
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Email address"
                    id="emailInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="d-flex justify-content-around form-check">
                <div>
                    <input className="form-check-input" type="checkbox" value="" id="rememberMeCheck" />
                    <label className="form-check-label" htmlFor="rememberMeCheck">Remember me</label>
                </div>
                <div>
                    <a href="#" className="link-primary">Forgot Password?</a>
                </div>
            </div>
            <div className="row m-0 pt-2 pb-2">
                <button className="btn btn-primary" onClick={handleSignIn}>SIGN IN</button>
            </div>
            <div className="d-flex justify-content-center">
                <p>Not a member? <a href="#" className="link-primary">Register</a></p>
            </div>
        </div>
    );
};

export default Login;





  


  

