// import React, { useState } from 'react';
// import '../../CssFiles/Common/RegisterPage.css';
// import {Link, useNavigate,  Navigate } from "react-router-dom";
// const Register = () => {
// //   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     Number: '',
//     password: '',
//     confirmPassword: '',
//     agreeTerms: false
//   });

// //    if (isAuthenticated()) {
// //     const role = getUserRole();
// //     return <Navigate to={role === "admin" ? "/admin/dashboard" : "/user/dashboard"} replace />;
// //   }

//   const handleChange = (e) => {
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//     setFormData({
//       ...formData,
//       [e.target.name]: value
//     });
//   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     console.log(formData);
// //     try {
// //         // const res = await registerUser(formData);
// //     const res = await verifyUser(formData);
// //     const data = res.data;
// //     // console.log(data);

// //     // fetch("http://localhost:5000/api/auth/register", {
// //     //   method: "POST",
// //     //   headers: { "Content-Type": "application/json" },
// //     //   body: JSON.stringify(formData),
// //     // });
// //     // const data = await res.json();

// //     if (res.status === 200) {
// //       console.log(data);
      
// //       // Handle successful registration
// //       toast.success("Registration successful!");
// //       navigate("/email-verify", { state: formData });
// //       setLoading(false);
// //     } else {
// //       // Handle registration error
// //       toast.error(data.message);
// //       setLoading(false);
// //     }
// //     setLoading(false);
// //     } catch (error) {
// //       setLoading(false);
// //       console.error('Error registering user:', error);
// //       toast.error(error.response.data.msg,'Registration failed. Please try again.');
// //     }
// //   };

// //   if (loading) {
// //     return <Spinner size="lg" />;
// //   }

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log(formData);
//     };

//   return (

//     // <div className="auth-container futuristic-auth">
//     //   <div className="auth-card">
//     //     <div className="auth-header">
//     //       <div className="auth-logo">
//     //         {/* <img src="/logo.png" alt="Logo" className="logo-image" /> */}
//     //         <span className="logo-text">Vendor Shop</span>
//     //       </div>
//     //       <h2>Create Account</h2>
//     //     </div>

//     //     <form className="auth-form" onSubmit={handleSubmit}>
//     //       <div className="form-group">
//     //         <label htmlFor="name">Full Name</label>
//     //         <div className="input-container">
//     //           <input
//     //             type="text"
//     //             id="name"
//     //             name="name"
//     //             value={formData.name}
//     //             onChange={handleChange}
//     //             required
//     //             className="futuristic-input"
//     //             placeholder='👤 Full Name'
//     //           />
//     //         </div>
//     //       </div>

//     //       <div className="form-group">
//     //         <label htmlFor="email">Email Address</label>
//     //         <div className="input-container">
//     //           <input
//     //             type="email"
//     //             id="email"
//     //             name="email"
//     //             value={formData.email}
//     //             onChange={handleChange}
//     //             required
//     //             className="futuristic-input"
//     //             placeholder='📧 Email Address'
//     //           />
//     //         </div>
//     //       </div>

//     //       <div className="form-group">
//     //         <label htmlFor="password">Mobile Number</label>
//     //         <div className="input-container">
//     //           <input
//     //             type="Number"
//     //             id="Number"
//     //             name="Number"
//     //             value={formData.Number}
//     //             onChange={handleChange}
//     //             required
//     //             className="futuristic-input"
//     //             placeholder='📱 Mobile Number'
//     //           />
//     //         </div>
//     //       </div>

//     //       <div className="form-group">
//     //         <label htmlFor="password">Password</label>
//     //         <div className="input-container">
//     //           <input
//     //             type="password"
//     //             id="password"
//     //             name="password"
//     //             value={formData.password}
//     //             onChange={handleChange}
//     //             required
//     //             className="futuristic-input"
//     //             placeholder='🔒 Password'
//     //           />
//     //         </div>
//     //       </div>

//     //       <div className="form-group">
//     //         <label htmlFor="confirmPassword">Confirm Password</label>
//     //         <div className="input-container">
//     //           <input
//     //             type="password"
//     //             id="confirmPassword"
//     //             name="confirmPassword"
//     //             value={formData.confirmPassword}
//     //             onChange={handleChange}
//     //             required
//     //             className="futuristic-input"
//     //             placeholder='🔒 Confirm Password'
//     //           />
//     //         </div>
//     //       </div>

//     //       <div className="form-group checkbox-group">
//     //         <label className="register-checkbox-container" style={{ fontSize: "13px" }}>
//     //           <input
//     //             type="checkbox"
//     //             name="agreeTerms"
//     //             checked={formData.agreeTerms}
//     //             onChange={handleChange}
//     //             required
//     //           />
//     //           <span className="checkmark"></span>
//     //           {"  "}I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
//     //         </label>
//     //       </div>

//     //       <button type="submit" className="auth-btn futuristic-btn primary">
//     //         Create Account
//     //       </button>
//     //     </form>

//     //     <div className="auth-footer">
//     //       <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
//     //     </div>
//     //   </div>
//     //   {/* <Footer /> */}
//     // </div>

//     <div className="vendor-register-container">
//   <div className="vendor-register-card">
//     <div className="vendor-register-header">
//       <div className="vendor-register-logo">
//         {/* <img src="/logo.png" alt="Logo" className="vendor-register-logo-image" /> */}
//         <span className="vendor-register-logo-text">Vendor Shop</span>
//       </div>
//       <h2>Create Account</h2>
//     </div>

//     <form className="vendor-register-form" onSubmit={handleSubmit}>
//       <div className="vendor-register-form-group">
//         <label htmlFor="name">Full Name</label>
//         <div className="vendor-register-input-container">
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="vendor-register-input"
//             placeholder="👤 Full Name"
//           />
//         </div>
//       </div>

//       <div className="vendor-register-form-group">
//         <label htmlFor="email">Email Address</label>
//         <div className="vendor-register-input-container">
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="vendor-register-input"
//             placeholder="📧 Email Address"
//           />
//         </div>
//       </div>

//       <div className="vendor-register-form-group">
//         <label htmlFor="Number">Mobile Number</label>
//         <div className="vendor-register-input-container">
//           <input
//             type="number"
//             id="Number"
//             name="Number"
//             value={formData.Number}
//             onChange={handleChange}
//             required
//             className="vendor-register-input"
//             placeholder="📱 Mobile Number"
//           />
//         </div>
//       </div>

//       <div className="vendor-register-form-group">
//         <label htmlFor="password">Password</label>
//         <div className="vendor-register-input-container">
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="vendor-register-input"
//             placeholder="🔒 Password"
//           />
//         </div>
//       </div>

//       <div className="vendor-register-form-group">
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <div className="vendor-register-input-container">
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             className="vendor-register-input"
//             placeholder="🔒 Confirm Password"
//           />
//         </div>
//       </div>

//       <div className="vendor-register-form-group vendor-register-checkbox-group">
//         <label className="vendor-register-checkbox-container" style={{ fontSize: "13px" }}>
//           <input
//             type="checkbox"
//             name="agreeTerms"
//             checked={formData.agreeTerms}
//             onChange={handleChange}
//             required
//           />
//           <span className="vendor-register-checkmark"></span>
//           {"  "}I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
//         </label>
//       </div>

//       <button type="submit" className="vendor-register-btn vendor-register-primary-btn">
//         Create Account
//       </button>
//     </form>

//     <div className="vendor-register-footer">
//       <p>
//         Already have an account?{" "}
//         <Link to="/login" className="vendor-register-link">Sign in</Link>
//       </p>
//     </div>
//   </div>
//   {/* <Footer /> */}
// </div>

//   );
// };

// export default Register;







import React, { useState } from 'react';
import '../../../CssFiles/Common/RegisterPage.css';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Number: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    if (formData.Number.length !== 10) newErrors.Number = "Mobile number must be 10 digits";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    let inputValue = type === 'checkbox' ? checked : value;

    // Restrict mobile number to digits and 10 characters
    if (name === 'Number') {
      inputValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
      if (inputValue.length > 10) return; // Prevent input beyond 10 digits
    }

    setFormData({
      ...formData,
      [name]: inputValue
    });

    // Clear error as user types
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return; // Don't submit
    }
    console.log("Form Data:", formData);
  };

  return (
    <div className="vendor-register-container">
      <div className="vendor-register-card">
        <div className="vendor-register-header">
          <div className="vendor-register-logo">
            <span className="vendor-register-logo-text">Vendor Shop</span>
          </div>
          <h2>Create Account</h2>
        </div>

        <form className="vendor-register-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="vendor-register-form-group">
            <label htmlFor="name">Full Name</label>
            <div className="vendor-register-input-container">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="vendor-register-input"
                placeholder="👤 Full Name"
              />
            </div>
            {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="vendor-register-form-group">
            <label htmlFor="email">Email Address</label>
            <div className="vendor-register-input-container">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="vendor-register-input"
                placeholder="📧 Email Address"
              />
            </div>
            {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
          </div>

          {/* Mobile Number */}
          <div className="vendor-register-form-group">
            <label htmlFor="Number">Mobile Number</label>
            <div className="vendor-register-input-container">
              <input
                type="text"
                id="Number"
                name="Number"
                value={formData.Number}
                onChange={handleChange}
                required
                maxLength="10"
                className="vendor-register-input"
                placeholder="📱 Mobile Number"
              />
            </div>
            {errors.Number && <small style={{ color: "red" }}>{errors.Number}</small>}
          </div>

          {/* Password */}
          <div className="vendor-register-form-group">
            <label htmlFor="password">Password</label>
            <div className="vendor-register-input-container">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="vendor-register-input"
                placeholder="🔒 Password"
              />
            </div>
            {errors.password && <small style={{ color: "red" }}>{errors.password}</small>}
          </div>

          {/* Confirm Password */}
          <div className="vendor-register-form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="vendor-register-input-container">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="vendor-register-input"
                placeholder="🔒 Confirm Password"
              />
            </div>
            {errors.confirmPassword && <small style={{ color: "red" }}>{errors.confirmPassword}</small>}
          </div>

          {/* Terms Checkbox */}
          <div className="vendor-register-form-group vendor-register-checkbox-group">
            <label className="vendor-register-checkbox-container" style={{ fontSize: "13px" }}>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <span className="vendor-register-checkmark"></span>
              {" "}I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
            </label>
            {errors.agreeTerms && <small style={{ color: "red", marginTop: "4px" }}>{errors.agreeTerms}</small>}
          </div>

          <button type="submit" className="vendor-register-btn vendor-register-primary-btn">
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="vendor-register-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="vendor-register-link">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
