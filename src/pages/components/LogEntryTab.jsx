import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    FaCheckCircle, 
    FaArrowRight, 
    FaUtensils, 
    FaBed, 
    FaTint, 
    FaSprayCan, 
    FaStickyNote,
    FaCalendarAlt,
    FaClock
} from 'react-icons/fa';

const LogEntryTab = ({ onSubmitLog, isLogging, showSuccess, error }) => {
    const [formData, setFormData] = useState({
        acneSeverity: 1,
        diet: '',
        sleep: 8,
        stress: 3,
        water: 8,
        skincareRoutine: '',
        notes: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitLog(formData);
    };

    const severityLevels = [
        { level: 1, text: 'Clear' },
        { level: 2, text: 'Mild' },
        { level: 3, text: 'Moderate' },
        { level: 4, text: 'Severe' },
        { level: 5, text: 'Very Severe' }
    ];

    const currentTime = new Date().toLocaleString();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
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

            {/* Form Container */}
            <div className="form-container">
                {/* Form Header */}
                <div className="form-header">
                    <div className="form-icon">
                        <FaCheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="form-title">Log Your Entry</h3>
                        <p className="form-subtitle">Track your daily skin health metrics</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Timestamp Display */}
                    <div className="timestamp-display">
                        <div className="timestamp-content">
                            <div className="timestamp-item">
                                <FaCalendarAlt className="timestamp-icon" />
                                <span className="timestamp-text">
                                    {new Date().toLocaleDateString()}
                                </span>
                            </div>
                            <div className="timestamp-item">
                                <FaClock className="timestamp-icon" />
                                <span className="timestamp-text">
                                    {new Date().toLocaleTimeString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Acne Severity */}
                    <div className="form-field">
                        <label className="form-label">
                            Acne Severity (1-5)
                        </label>
                        <div className="severity-grid">
                            {severityLevels.map(({ level, text }) => (
                                <motion.button
                                    key={level}
                                    type="button"
                                    onClick={() => handleInputChange('acneSeverity', level)}
                                    className={`severity-button ${formData.acneSeverity === level ? 'active' : ''}`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="severity-number">{level}</div>
                                    <div className="severity-text">{text}</div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Diet */}
                    <div className="form-field">
                        <label className="form-label">
                            What did you eat today?
                        </label>
                        <textarea
                            value={formData.diet}
                            onChange={(e) => handleInputChange('diet', e.target.value)}
                            placeholder="List your meals, snacks, and beverages..."
                            className="form-input"
                            rows="4"
                        />
                    </div>

                    {/* Sleep */}
                    <div className="form-field">
                        <label className="form-label">
                            Hours of Sleep
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="24"
                            value={formData.sleep}
                            onChange={(e) => handleInputChange('sleep', parseInt(e.target.value))}
                            className="form-input"
                            placeholder="8"
                        />
                    </div>

                    {/* Stress Level */}
                    <div className="form-field">
                        <label className="form-label">
                            Stress Level (1-10)
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={formData.stress}
                            onChange={(e) => handleInputChange('stress', parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="text-center text-sm text-gray-600 mt-2">
                            {formData.stress}/10
                        </div>
                    </div>

                    {/* Water Intake */}
                    <div className="form-field">
                        <label className="form-label">
                            Glasses of Water
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="20"
                            value={formData.water}
                            onChange={(e) => handleInputChange('water', parseInt(e.target.value))}
                            className="form-input"
                            placeholder="8"
                        />
                    </div>

                    {/* Skincare Routine */}
                    <div className="form-field">
                        <label className="form-label">
                            Skincare Routine
                        </label>
                        <textarea
                            value={formData.skincareRoutine}
                            onChange={(e) => handleInputChange('skincareRoutine', e.target.value)}
                            placeholder="List the products you used today..."
                            className="form-input"
                            rows="3"
                        />
                    </div>

                    {/* Notes */}
                    <div className="form-field">
                        <label className="form-label">
                            Additional Notes
                        </label>
                        <textarea
                            value={formData.notes}
                            onChange={(e) => handleInputChange('notes', e.target.value)}
                            placeholder="Any other observations, triggers, or notes..."
                            className="form-input"
                            rows="3"
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isLogging || showSuccess}
                        whileHover={{ scale: showSuccess ? 1 : 1.02, y: showSuccess ? 0 : -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`submit-button ${
                            showSuccess ? 'success' : 'normal'
                        }`}
                    >
                        {isLogging ? (
                            <>
                                <div className="submit-spinner"></div>
                                <span>Saving...</span>
                            </>
                        ) : showSuccess ? (
                            <>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className="submit-check"
                                >
                                    <FaCheckCircle className="w-6 h-6" />
                                </motion.div>
                                <span>Log Saved!</span>
                            </>
                        ) : (
                            <>
                                <FaCheckCircle className="w-5 h-5" />
                                <span>Save Log Entry</span>
                                <FaArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default LogEntryTab;
