import { useState } from 'react'; 
import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'; 
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [passWord, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { session, signInUser } = UserAuth();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const result = await signInUser(email, passWord);
            
            if(result.success) {
                navigate("/Dashboard");
            } else {
                setError(result.error || "Invalid email or password");
            }
        } catch(err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="signin-container">
            <div className="signin-wrapper">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="signin-header"
                >
                    <Link to="/" className="brand-link">
                        <h1 className="brand-title">
                            Nutriskin
                        </h1>
                    </Link>
                    <h2 className="signin-title">Welcome Back</h2>
                    <p className="signin-subtitle">Your skin journey continues</p>
                </motion.div>

                {/* Form Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="signin-card"
                >
                    <form onSubmit={handleSignIn} className="space-y-6">
                                                {/* Email Field */}
                        <div className="form-field">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                                </div>
                                <input 
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}                    
                                    placeholder="Enter your email" 
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent transition-all duration-200 text-[#2f3c3f] placeholder-gray-400" 
                                    type="email" 
                                    required
                                    value={email}
                                /> 
                            </div>
                        </div>

                                                {/* Password Field */}
                        <div className="form-field">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input 
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}  
                                    placeholder="Enter your password" 
                                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent transition-all duration-200 text-[#2f3c3f] placeholder-gray-400" 
                                    type={showPassword ? "text" : "password"} 
                                    required
                                    value={passWord}
                                /> 
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-[#ff6b6b] transition-colors duration-200" />
                                    ) : (
                                        <FaEye className="h-5 w-5 text-gray-400 hover:text-[#ff6b6b] transition-colors duration-200" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="forgot-password">
                            <a href="#">
                                Forgot your password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <motion.button 
                            type="submit" 
                            disabled={loading} 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="submit-button"
                        >
                            {loading ? (
                                <>
                                    <div className="submit-spinner"></div>
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </motion.button>

                        {/* Error Message */}
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="error-message"
                            >
                                <p className="error-text">{error}</p>
                            </motion.div>
                        )}
                    </form>

                    {/* Sign up link */}
                    <div className="signup-link">
                        <p className="signup-text">
                            Don't have an account?{' '}
                            <Link to='/signup'>
                                Sign up!
                            </Link>
                        </p>
                    </div>
                </motion.div>

                {/* Back to home */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="back-home"
                >
                    <Link to="/">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to home
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Signin;