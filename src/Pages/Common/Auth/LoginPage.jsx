// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../../CssFiles/Common/LoginPage.css';

// const LoginPage = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [rememberMe, setRememberMe] = useState(false);
//     const [loginSuccess, setLoginSuccess] = useState(false);
    
//     const navigate = useNavigate();

//     const demoCredentials = {
//         email: 'demo@example.com',
//         password: 'demo123'
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
        
//         // Clear error when user starts typing
//         if (errors[name]) {
//             setErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         if (!formData.email.trim()) {
//             newErrors.email = 'Email address is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Please enter a valid email address';
//         }

//         if (!formData.password.trim()) {
//             newErrors.password = 'Password is required';
//         } else if (formData.password.length < 6) {
//             newErrors.password = 'Password must be at least 6 characters long';
//         }

//         return newErrors;
//     };

//     const handleDemoLogin = () => {
//         setFormData(demoCredentials);
//         setErrors({});
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const newErrors = validateForm();
//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             return;
//         }

//         setIsLoading(true);

//         // Simulate API call
//         try {
//             await new Promise(resolve => setTimeout(resolve, 1500));
            
//             // For demo purposes, check against demo credentials
//             if (formData.email === demoCredentials.email && formData.password === demoCredentials.password) {
//                 setLoginSuccess(true);
                
//                 // Store login state (in a real app, you'd store tokens)
//                 if (rememberMe) {
//                     localStorage.setItem('rememberMe', 'true');
//                 }
                
//                 // Redirect after success
//                 setTimeout(() => {
//                     navigate('/dashboard');
//                 }, 1000);
//             } else {
//                 setErrors({ 
//                     submit: 'Invalid email or password. Try demo credentials: demo@example.com / demo123' 
//                 });
//             }
//         } catch (error) {
//             setErrors({ submit: 'Login failed. Please try again.' });
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const getPasswordStrength = (password) => {
//         if (password.length === 0) return '';
//         if (password.length < 6) return 'login-password-weak';
//         if (password.length < 10) return 'login-password-medium';
//         return 'login-password-strong';
//     };

//     return (
//         <div className="login-page">
//             <div className="login-container">
//                 <div className="login-card">
//                     {/* Header */}
//                     <div className="login-header">
//                         <div className="login-logo">🛍️</div>
//                         <h1 className="login-title">Welcome Back</h1>
//                         <p className="login-subtitle">
//                             Sign in to your account to continue shopping
//                         </p>
//                     </div>

//                     {/* Demo Credentials */}
//                     <div className="login-demo">
//                         <div className="login-demo-title">
//                             <span>👤 Demo Account</span>
//                         </div>
//                         <div className="login-demo-credentials">
//                             <strong>Email:</strong> demo@example.com<br />
//                             <strong>Password:</strong> demo123
//                         </div>
//                         <button 
//                             onClick={handleDemoLogin}
//                             style={{
//                                 marginTop: '0.5rem',
//                                 background: 'none',
//                                 border: '1px dashed #3498db',
//                                 color: '#3498db',
//                                 padding: '0.5rem 1rem',
//                                 borderRadius: '6px',
//                                 fontSize: '0.8rem',
//                                 cursor: 'pointer',
//                                 width: '100%'
//                             }}
//                         >
//                             Fill Demo Credentials
//                         </button>
//                     </div>

//                     {/* Success Message */}
//                     {loginSuccess && (
//                         <div className="login-success">
//                             ✅ Login successful! Redirecting...
//                         </div>
//                     )}

//                     {/* Login Form */}
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         {/* Email Field */}
//                         <div className="login-form-group">
//                             <label htmlFor="email" className="login-form-label login-form-label-required">
//                                 📧 Email Address
//                             </label>
//                             <div className="login-input-wrapper">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     className="login-form-input"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     placeholder="Enter your email address"
//                                     disabled={isLoading}
//                                 />
//                                 <span className="login-input-icon">@</span>
//                             </div>
//                             {errors.email && (
//                                 <div className="login-form-error">⚠️ {errors.email}</div>
//                             )}
//                         </div>

//                         {/* Password Field */}
//                         <div className="login-form-group">
//                             <label htmlFor="password" className="login-form-label login-form-label-required">
//                                 🔒 Password
//                             </label>
//                             <div className="login-input-wrapper">
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     id="password"
//                                     name="password"
//                                     className="login-form-input"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     placeholder="Enter your password"
//                                     disabled={isLoading}
//                                 />
//                                 <span className="login-input-icon">🔐</span>
//                                 <button
//                                     type="button"
//                                     className="login-password-toggle"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     disabled={isLoading}
//                                 >
//                                     {showPassword ? '👁️' : '👁️‍🗨️'}
//                                 </button>
//                             </div>
                            
//                             {/* Password Strength Indicator */}
//                             {formData.password && (
//                                 <div className="login-password-strength">
//                                     <div className={`login-password-strength-bar ${getPasswordStrength(formData.password)}`}></div>
//                                 </div>
//                             )}
                            
//                             {errors.password && (
//                                 <div className="login-form-error">⚠️ {errors.password}</div>
//                             )}
//                         </div>

//                         {/* Options */}
//                         <div className="login-form-options">
//                             <label className="login-remember">
//                                 <div 
//                                     className={`login-remember-checkbox ${rememberMe ? 'checked' : ''}`}
//                                     onClick={() => setRememberMe(!rememberMe)}
//                                 ></div>
//                                 <span className="login-remember-label">Remember me</span>
//                             </label>
//                             <Link to="/forgot-password" className="login-forgot">
//                                 Forgot password?
//                             </Link>
//                         </div>

//                         {/* Submit Button */}
//                         <button 
//                             type="submit" 
//                             className="login-submit-btn"
//                             disabled={isLoading}
//                         >
//                             {isLoading ? (
//                                 <>
//                                     <div className="login-loading-spinner"></div>
//                                     Signing In...
//                                 </>
//                             ) : (
//                                 <>
//                                     🚀 Sign In
//                                 </>
//                             )}
//                         </button>

//                         {/* Error Message */}
//                         {errors.submit && (
//                             <div className="login-form-error" style={{textAlign: 'center', marginTop: '1rem'}}>
//                                 ⚠️ {errors.submit}
//                             </div>
//                         )}
//                     </form>

//                     {/* Divider */}
//                     <div className="login-divider">
//                         <span className="login-divider-text">or continue with</span>
//                     </div>

//                     {/* Social Login */}
//                     <div className="login-social">
//                         <button 
//                             type="button" 
//                             className="login-social-btn login-social-google"
//                             disabled={isLoading}
//                         >
//                             G
//                         </button>
//                         <button 
//                             type="button" 
//                             className="login-social-btn login-social-facebook"
//                             disabled={isLoading}
//                         >
//                             f
//                         </button>
//                         <button 
//                             type="button" 
//                             className="login-social-btn login-social-apple"
//                             disabled={isLoading}
//                         >
//                             
//                         </button>
//                     </div>

//                     {/* Signup Link */}
//                     <div className="login-signup">
//                         <span className="login-signup-text">
//                             Don't have an account?
//                         </span>
//                         <Link to="/signup" className="login-signup-link">
//                             Sign up now
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;














import React, { useState } from 'react';
import '../../../CssFiles/Common/LoginPage.css';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

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
      return;
    }

    console.log("Login Data:", formData);

    // Simulate login success:
    // navigate('/user/dashboard');
  };

  return (
    <div className="vendor-login-container">
      <div className="vendor-login-card">
        <div className="vendor-login-header">
          <div className="vendor-login-logo">
            <span className="vendor-login-logo-text">Vendor Shop</span>
          </div>
          <h2>Login to Your Account</h2>
        </div>

        <form className="vendor-login-form" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="vendor-login-form-group">
            <label htmlFor="email">Email Address</label>
            <div className="vendor-login-input-container">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="vendor-login-input"
                placeholder="📧 Email Address"
              />
            </div>
            {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
          </div>

          {/* Password */}
          <div className="vendor-login-form-group">
            <label htmlFor="password">Password</label>
            <div className="vendor-login-input-container">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="vendor-login-input"
                placeholder="🔒 Password"
              />
            </div>
            {errors.password && <small style={{ color: "red" }}>{errors.password}</small>}
          </div>

          <button type="submit" className="vendor-login-btn vendor-login-primary-btn">
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <div className="vendor-login-footer">
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="vendor-login-link">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;