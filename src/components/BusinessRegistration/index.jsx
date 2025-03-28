import React from "react";

const BusinessRegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Business registration form submitted");
  };

  return (
    <div className="container">
      <header>
        <img src="logo.png" alt="Logo" className="logo" />
        <h1>Business Registration Form</h1>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="owner-first">
            Business Owner Name <span className="text-rgb-217-13-13">*</span>
          </label>
          <div className="inline-inputs">
            <input
              type="text"
              id="owner-first"
              className="frame-1000001549"
              placeholder="First"
              required
            />
            <input
              type="text"
              id="owner-last"
              className="frame-1000001549"
              placeholder="Last"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="business-name">
            Business Name <span className="text-rgb-217-13-13">*</span>
          </label>
          <input
            type="text"
            id="business-name"
            className="frame-1000001549"
            placeholder="Enter Business Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">
            Contact Number <span className="text-rgb-217-13-13">*</span>
          </label>
          <div className="inline-inputs">
            <input
              type="text"
              id="country-code"
              className="frame-1000001549 small"
              placeholder="+1"
              required
            />
            <input
              type="text"
              id="contact"
              className="frame-1000001549"
              placeholder="### ### ####"
              required
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="frame-1000001549"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>
            Address <span className="text-rgb-217-13-13">*</span>
          </label>
          <input
            type="text"
            className="frame-1000001549"
            placeholder="Address Line 1"
            required
          />
          <input
            type="text"
            className="frame-1000001549"
            placeholder="Address Line 2"
          />
          <div className="inline-inputs">
            <input
              type="text"
              className="frame-1000001549"
              placeholder="City"
              required
            />
            <input
              type="text"
              className="frame-1000001549"
              placeholder="Region"
              required
            />
          </div>
          <div className="inline-inputs">
            <input
              type="text"
              className="frame-1000001549"
              placeholder="Zip/Postal code"
              required
            />
            <input
              type="text"
              className="frame-1000001549"
              placeholder="Country"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="type">
            Type of Business <span className="text-rgb-217-13-13">*</span>
          </label>
          <select id="type" className="frame-1000001570" required>
            <option value="">Select Value</option>
            <option value="restaurant">Restaurants</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="frame-1000001551"
            placeholder="Maximum of 180 characters.."
            maxLength={180}
          />
        </div>

        <div className="form-group">
          <label htmlFor="upload">
            Upload images here (format .jpg, .jpeg)
          </label>
          <input
            type="file"
            id="upload"
            className="group-24"
            accept="image/jpeg, image/jpg"
          />
        </div>

        <button type="submit" className="submit-button">
          Register Business
        </button>
      </form>
    </div>
  );
};

export default BusinessRegistrationForm;
