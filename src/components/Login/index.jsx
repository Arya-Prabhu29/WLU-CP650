const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="container">
      <header>
        <img src="logo.png" alt="Logo" className="logo" />
        <h1>Login</h1>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="frame-1000001549"
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="frame-1000001549"
            placeholder="Enter your Password"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          LOGIN
        </button>
      </form>

      <p className="forgot-password">Forgot Password?</p>
      <p className="register-link">
        No Account? <span>Register</span>
      </p>
    </div>
  );
};

export default Login;
