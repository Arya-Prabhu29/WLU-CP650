import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration form submitted");
  };

  return (
    <div className="register-1">
      <p className="text-26">
        <span className="text-black">GET STARTED</span>
      </p>

      <form className="frame-1-2" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="email-card-3">
          <p className="text-7">
            <span className="text-black">Email</span>
          </p>
          <div className="group-2-4">
            <input
              type="email"
              className="rectangle-2-5"
              placeholder="Enter your Email"
              required
            />
          </div>
        </div>

        {/* Name Field */}
        <div className="name-8">
          <p className="text-12">
            <span className="text-black">Name</span>
          </p>
          <div className="group-2-9">
            <input
              type="text"
              className="rectangle-2-10"
              placeholder="Enter your Name"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="password-13">
          <p className="text-17">
            <span className="text-black">Password</span>
          </p>
          <div className="group-2-14">
            <input
              type="password"
              className="rectangle-2-15"
              placeholder="Enter your Password"
              required
            />
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="confirmpassword-18">
          <p className="text-22">
            <span className="text-black">Confirm Password</span>
          </p>
          <div className="group-2-19">
            <input
              type="password"
              className="rectangle-2-20"
              placeholder="Match your Password"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="_btnregister-23">
          <p className="text-25">
            <span className="text-rgb-15-15-15">REGISTER</span>
          </p>
        </button>
      </form>

      <p className="text-27">
        <span className="text-black">Already have an account? Login</span>
      </p>
    </div>
  );
};

export default Register;
