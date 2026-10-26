import './Signin.css';
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card sign-in-card">
        <div className="auth-illustration">
          <span className="badge">Welcome back</span>
          <h1>Sign in to continue</h1>
          <p>Access your dashboard and manage everything in one place.</p>
        </div>

        <div className="auth-form-panel">
          <h2>Sign In</h2>
          <p className="subtitle">Use your account details below</p>

          <form className="auth-form">
            <div className="input-group">
              <label htmlFor="signin-email">Email</label>
              <input
                id="signin-email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="signin-password">Password</label>
              <input
                id="signin-password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="form-row">
              <label className="checkbox-wrap">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button  type="submit" className="primary-btn">
              Sign In
            </button>
          </form>

          <p className="switch-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;