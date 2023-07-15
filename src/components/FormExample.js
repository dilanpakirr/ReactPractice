import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validation";
function FormExample() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "denem",
      lastName: "lastname",
      email: "email@gmail.com",
      gender: "female",
      hobies: [],
      country: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        <br /> <br />
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} value={values.email} />
        <br /> <br />
        <select name="country" onChange={handleChange}>
          <option value="tr">Tr</option>
          <option value="en">En</option>
          <option value="usa">Usa</option>
        </select>
        <br /> <br />
        <div>
          Footboll
          <input
            type="checkbox"
            name="hobies"
            value="Footboll"
            onChange={handleChange}
          />
        </div>
        <div>
          BasketBall
          <input
            type="checkbox"
            name="hobies"
            value="Baskbetball"
            onChange={handleChange}
          />
        </div>
        <div>
          Voleyball
          <input
            type="checkbox"
            name="hobies"
            value="Voleyball"
            onChange={handleChange}
          />
        </div>
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default FormExample;
