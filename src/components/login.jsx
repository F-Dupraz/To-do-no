import React from 'react';
import '../styles/login.scss';

const Login = () => {
  return (
    <section className="login-section">
      <h3>Do you have an account?</h3>
      <form action="/" method="get">
        <p>Log In</p>
        <label htmlFor="Login-email">Email</label><br />
        <input type="email" name="email" id="Login-email" /><br />
        <label htmlFor="Login-password">Password</label><br />
        <input type="password" name="password" id="Login-password" /><br />
        <input className="submit_button" type="submit" value="Log In" />
      </form>
    </section>
  );
}

export default Login;