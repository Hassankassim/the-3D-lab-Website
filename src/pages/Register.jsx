import React from 'react';
import Reactnavbar from '../components/Navbar';
import Footer from '../components/Footer';

function RegisterForm() {
  return (
    <>
      <Reactnavbar />
      <div className="center margint">
        <div className="login-form-container ">
          <p className="login-title">Create an Account</p>
          <form className="login-form">
            <input type="text" className="login-input" placeholder="Full Name" />
            <input type="email" className="login-input" placeholder="Email" />
            <input type="password" className="login-input" placeholder="Password" />
            <input type="password" className="login-input" placeholder="Confirm Password" />
            <input type="text" className="login-input" placeholder="Phone Number" />
            
            <p className="login-page-link">
              <span className="login-page-link-label">Forgot Password?</span>
            </p>
            <button className="login-form-btn">Sign up</button>
          </form>
          <p className="login-sign-up-label">
            Already have an account?<span className="login-sign-up-link"><a href="/login">Log in</a></span>
          </p>
          <div className="login-buttons-container">
           
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterForm;
