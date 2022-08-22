import React from "react";

export default function Form() {
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isGoodGuy: true,
    employment: "",
    flavour: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        type="text"
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
      <input
        type="checkbox"
        id="isGoodGuy"
        checked={formData.isGoodGuy}
        onChange={handleChange}
        name="isGoodGuy"
      />
      <label htmlFor="isGoodGuy">Are you a good guy?</label>
      <br />
      <br />

      <fieldset>
        <legend>Current employment status?</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>

      <label htmlFor="favColor">What is your favorite flavour?</label>
      <br />
      <select
        id="flavour"
        name="flavour"
        value={formData.flavour}
        onChange={handleChange}
      >
        <option value="chocolate">Chocolate</option>
        <option value="banana">Banana</option>
        <option value="vanilla">Vanilla</option>
        <option value="bubblegum">Bubblegum</option>
        <option value="cookies">Cookies</option>
        <option value="ice-cream">Ice Cream</option>
        <option value="unflavoured">Unflavoured</option>
      </select>
      <br />
      <br />
      <input type="submit" value="Send it"/>
    </form>
  );
}

// 08: 31: 04