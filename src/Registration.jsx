
import React, { useState } from "react";

export default function Registration() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccess("");
  };

  // Form Validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter valid email";

    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter 10 digit mobile number";

    if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters required";

    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Password does not match";

    if (!formData.dob)
      newErrors.dob = "Select date of birth";

    if (!formData.gender)
      newErrors.gender = "Select gender";

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.city.trim())
      newErrors.city = "City is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Registration Successful!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        address: "",
        city: ""
      });
    }
  };

  // Reset Form
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      address: "",
      city: ""
    });

    setErrors({});
    setSuccess("");
  };

  return (
    <div className="page">

      <div className="welcome">
        <h2>STUDENT PORTAL</h2>

        <div>
          <h1>Start Your Journey With Us!</h1>

          <p>
            Every great achievement begins with a single step.
            Create your account and begin your journey towards success.
          </p>

          <h3>Learn. Grow. Achieve.</h3>
        </div>

        <h4>YOUR FUTURE STARTS HERE</h4>
      </div>

      <div className="form-section">

        <form onSubmit={handleSubmit}>

          <div className="heading">
            <h2>Student Registration</h2>
            <p>Fill in your details to create an account</p>
          </div>

          <div className="form-grid">

            <div>
              <label>First Name</label>
              <input name="firstName" value={formData.firstName}
                onChange={handleChange} placeholder="First Name" />
              <span>{errors.firstName}</span>
            </div>

            <div>
              <label>Last Name</label>
              <input name="lastName" value={formData.lastName}
                onChange={handleChange} placeholder="Last Name" />
              <span>{errors.lastName}</span>
            </div>

            <div>
              <label>Email</label>
              <input type="email" name="email" value={formData.email}
                onChange={handleChange} placeholder="Email Address" />
              <span>{errors.email}</span>
            </div>

            <div>
              <label>Mobile Number</label>
              <input name="mobile" value={formData.mobile}
                onChange={handleChange} placeholder="10 Digit Number" />
              <span>{errors.mobile}</span>
            </div>

            <div>
              <label>Password</label>
              <input type="password" name="password"
                value={formData.password} onChange={handleChange}
                placeholder="Password" />
              <span>{errors.password}</span>
            </div>

            <div>
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword"
                value={formData.confirmPassword} onChange={handleChange}
                placeholder="Confirm Password" />
              <span>{errors.confirmPassword}</span>
            </div>

            <div>
              <label>Date of Birth</label>
              <input type="date" name="dob"
                value={formData.dob} onChange={handleChange} />
              <span>{errors.dob}</span>
            </div>

            <div>
              <label>Gender</label>
              <select name="gender" value={formData.gender}
                onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
              <span>{errors.gender}</span>
            </div>

            <div>
              <label>Address</label>
              <input name="address" value={formData.address}
                onChange={handleChange} placeholder="Enter Address" />
              <span>{errors.address}</span>
            </div>

            <div>
              <label>City</label>
              <input name="city" value={formData.city}
                onChange={handleChange} placeholder="Enter City" />
              <span>{errors.city}</span>
            </div>

          </div>

          {success && <h3 className="success">{success}</h3>}

          <div className="buttons">
            <button type="submit">Create Account</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>

        </form>
      </div>

    </div>
  );
}
