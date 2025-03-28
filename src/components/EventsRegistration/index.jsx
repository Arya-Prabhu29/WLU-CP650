import React from "react";

const EventsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event form submitted");
  };

  return (
    <div className="container">
      <header>
        <img src="logo.png" alt="Logo" className="logo" />
        <h1>Events Form</h1>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Event Name <span className="text-rgb-217-13-13">*</span>
          </label>
          <input
            type="text"
            className="frame-1000001549"
            placeholder="Enter Event Name"
            required
          />
        </div>

        <div className="form-group">
          <label>
            Date & Time <span className="text-rgb-217-13-13">*</span>
          </label>
          <div className="inline-inputs">
            <input type="date" className="frame-1000001549" required />
            <input type="time" className="frame-1000001549" required />
          </div>
        </div>

        <div className="form-group">
          <label>
            Location <span className="text-rgb-217-13-13">*</span>
          </label>
          <input
            type="text"
            className="frame-1000001549"
            placeholder="Enter Location"
            required
          />
        </div>

        <div className="form-group">
          <label>
            Organizer Name <span className="text-rgb-217-13-13">*</span>
          </label>
          <div className="inline-inputs">
            <input
              type="text"
              className="frame-1000001549"
              placeholder="First"
              required
            />
            <input
              type="text"
              className="frame-1000001549"
              placeholder="Last"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>
            Organization/Company <span className="text-rgb-217-13-13">*</span>
          </label>
          <input
            type="text"
            className="frame-1000001549"
            placeholder="Enter Company Name"
            required
          />
        </div>

        <div className="form-group">
          <label>
            Email <span className="text-rgb-217-13-13">*</span>
          </label>
          <input
            type="email"
            className="frame-1000001549"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>
            Contact Number <span className="text-rgb-217-13-13">*</span>
          </label>
          <div className="inline-inputs">
            <input
              type="text"
              className="frame-1000001549 small"
              value="+1"
              readOnly
            />
            <input
              type="tel"
              className="frame-1000001549"
              placeholder="### ### ####"
              required
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Upload images here (format .jpg, .jpeg)</label>
          <input
            type="file"
            className="group-24"
            accept="image/jpeg, image/jpg"
          />
        </div>

        <div className="form-group">
          <label>Description of the Event</label>
          <textarea
            className="frame-1000001551"
            placeholder="Maximum of 250 characters.."
            maxLength={250}
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventsForm;
