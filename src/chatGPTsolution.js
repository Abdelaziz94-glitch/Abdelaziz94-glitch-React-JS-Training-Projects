


// second solution without using any external libraries 
import React, { useState } from "react";

const FormInReact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: [],
    resume: null,
    url: "",
    choice: "",
    about: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedSubjects = checked
        ? [...prevData.subjects, value]
        : prevData.subjects.filter((subject) => subject !== value);
      return { ...prevData, subjects: updatedSubjects };
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subjects: [],
      resume: null,
      url: "",
      choice: "",
      about: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "green" }}>Form in React</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div style={{ marginBottom: "15px" }}>
          <label>First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Last Name */}
        <div style={{ marginBottom: "15px" }}>
          <label>Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Contact */}
        <div style={{ marginBottom: "15px" }}>
          <label>Contact*</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Gender */}
        <div style={{ marginBottom: "15px" }}>
          <label>Gender*</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
              style={{ marginLeft: "10px" }}
            />{" "}
            Female
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleInputChange}
              style={{ marginLeft: "10px" }}
            />{" "}
            Other
          </div>
        </div>

        {/* Subjects */}
        <div style={{ marginBottom: "15px" }}>
          <label>Your Best Subject</label>
          <div>
            <input
              type="checkbox"
              value="English"
              checked={formData.subjects.includes("English")}
              onChange={handleCheckboxChange}
            />{" "}
            English
            <input
              type="checkbox"
              value="Maths"
              checked={formData.subjects.includes("Maths")}
              onChange={handleCheckboxChange}
              style={{ marginLeft: "10px" }}
            />{" "}
            Maths
            <input
              type="checkbox"
              value="Physics"
              checked={formData.subjects.includes("Physics")}
              onChange={handleCheckboxChange}
              style={{ marginLeft: "10px" }}
            />{" "}
            Physics
          </div>
        </div>

        {/* Upload Resume */}
        <div style={{ marginBottom: "15px" }}>
          <label>Upload Resume*</label>
          <input type="file" onChange={handleFileChange} />
        </div>

        {/* Enter URL */}
        <div style={{ marginBottom: "15px" }}>
          <label>Enter URL*</label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Select Choice */}
        <div style={{ marginBottom: "15px" }}>
          <label>Select Your Choice</label>
          <select
            name="choice"
            value={formData.choice}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value="">Select</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
          </select>
        </div>

        {/* About */}
        <div style={{ marginBottom: "15px" }}>
          <label>About Yourself</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            rows="4"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          ></textarea>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={handleReset} style={buttonStyle}>
            Reset
          </button>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: "green",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default FormInReact;
