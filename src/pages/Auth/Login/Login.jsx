import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPageHook from "../../../CustomHooks/Auth/LoginPageHook";
import FormSpinner from "../../../components/Utilities/FormSpinner/FormSpinner";
const Login = () => {
  let [
    display,
    loginEmail,
    loginPassword,
    onLoginEmailChange,
    onLoginPasswordChange,
    onSubmit
  ] = LoginPageHook();
  return (
    <section>
      <Container>
        <div className="login">
          <div className="login-content py-5 px-4">
            <h2>Login</h2>
            <div className="form my-3">
              <input
                value={loginEmail}
                onChange={onLoginEmailChange}
                className="form-control"
                type="email"
                placeholder="E-mail"
              />
              <input
                value={loginPassword}
                onChange={onLoginPasswordChange}
                className="form-control my-3"
                type="password"
                placeholder="Password"
              />
              <button className="btn" onClick={onSubmit}>
                Login
              </button>
            </div>
            <div className="login-footer">
              <p>Don't have an account?</p>
              <Link to="/register">
                <span>Sign up</span>
              </Link>
            </div>
            <div className="login-footer">
              <Link to="/forgot-password">
                <span>Forgot Password?</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000} />
      <FormSpinner displayStyle={display}/>
    </section>
  );
};
export default Login;
