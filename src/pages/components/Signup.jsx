import { useState } from 'react'; 
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'; 
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { session, signUpNewUser } = UserAuth();
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        // Password validation
        if (password !== confirmPassword) {
            setError("Passwords don't match");
            setLoading(false);
            return;
        }
        
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            setLoading(false);
            return;
        }

        try {
            const result = await signUpNewUser(email, password);
            
            if(result.success) {
                navigate("/Dashboard");
            } else {
                setError(result.error || "Failed to create account");
            }
        } catch(err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center px-4 py-8">
            <div className="max-w-md w-full">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <Link to="/" className="inline-block mb-6">
                        <h1 className="text-3xl font-bold text-[#ff6b6b] hover:text-[#ff5252] transition-colors duration-200">
                            Nutriskin
                        </h1>
                    </Link>
                    <h2 className="text-3xl font-bold text-[#2f3c3f] mb-2">Join Nutriskin</h2>
                    <p className="text-[#ff6b6b] font-medium">Start your skin health journey today</p>
                </motion.div>

                {/* Form Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                >
                    <form onSubmit={handleSignUp} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#2f3c3f] mb-2">
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
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-[#2f3c3f] mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input 
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}  
                                    placeholder="Create a password (min. 6 characters)" 
                                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent transition-all duration-200 text-[#2f3c3f] placeholder-gray-400" 
                                    type={showPassword ? "text" : "password"} 
                                    required
                                    value={password}
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

                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#2f3c3f] mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input 
                                    id="confirmPassword"
                                    onChange={(e) => setConfirmPassword(e.target.value)}  
                                    placeholder="Confirm your password" 
                                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent transition-all duration-200 text-[#2f3c3f] placeholder-gray-400" 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    required
                                    value={confirmPassword}
                                /> 
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-[#ff6b6b] transition-colors duration-200" />
                                    ) : (
                                        <FaEye className="h-5 w-5 text-gray-400 hover:text-[#ff6b6b] transition-colors duration-200" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Password Requirements */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-2">Password requirements:</p>
                            <ul className="text-xs text-gray-500 space-y-1">
                                <li className={`flex items-center ${password.length >= 6 ? 'text-green-600' : ''}`}>
                                    <span className="mr-2">{password.length >= 6 ? '✓' : '○'}</span>
                                    At least 6 characters
                                </li>
                                <li className={`flex items-center ${password === confirmPassword && confirmPassword.length > 0 ? 'text-green-600' : ''}`}>
                                    <span className="mr-2">{password === confirmPassword && confirmPassword.length > 0 ? '✓' : '○'}</span>
                                    Passwords match
                                </li>
                            </ul>
                        </div>

                        {/* Submit Button */}
                        <motion.button 
                            type="submit" 
                            disabled={loading} 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#ff6b6b] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#ff5252] transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Creating account...
                                </>
                            ) : (
                                'Create Account'
                            )}
                        </motion.button>

                        {/* Error Message */}
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-50 border border-red-200 rounded-lg p-3"
                            >
                                <p className="text-red-600 text-sm text-center">{error}</p>
                            </motion.div>
                        )}
                    </form>

                    {/* Sign in link */}
                    <div className="mt-6 text-center">
                        <p className="text-[#2f3c3f]">
                            Already have an account?{' '}
                            <Link to='/signin' className="text-[#ff6b6b] font-semibold hover:underline transition-colors duration-200">
                                Sign in!
                            </Link>
                        </p>
                    </div>
                </motion.div>

                {/* Back to home */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-6"
                >
                    <Link to="/" className="text-[#2f3c3f] hover:text-[#ff6b6b] transition-colors duration-200 flex items-center justify-center">
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

export default Signup;