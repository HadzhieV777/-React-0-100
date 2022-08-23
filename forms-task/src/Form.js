import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    rePass: "",
    newsletter: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password !== formData.rePass) {
      alert("Passwords didn't match");
    } else {
      alert("Registered!")
    }

  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>

      <div className="form-field">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />{" "}
      </div>

      <div className="form-field">
        <input
          type="password"
          name="rePass"
          value={formData.rePass}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />{" "}
      </div>

      <div className="form-field">
        <input
          type="checkbox"
          id="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
          name="newsletter"
        />
        <label htmlFor="newsletter">I want to hear from you</label>
      </div>

      <div className="form-field">
        <button className="btn" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}
