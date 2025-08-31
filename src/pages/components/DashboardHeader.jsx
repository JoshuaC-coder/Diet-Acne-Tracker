import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';

const DashboardHeader = ({ logs }) => {
    const { session, signOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <header className="dashboard-header">
            <div className="dashboard-header-content">
                <div className="dashboard-header-inner">
                    {/* Left Section - Brand & User */}
                    <div className="brand-section">
                        {/* Brand Logo */}
                        <motion.div 
                            className="brand-logo"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h1 className="brand-text">
                                Nutriskin
                            </h1>
                        </motion.div>

                        {/* Divider */}
                        <div className="header-divider"></div>

                        {/* User Info */}
                        <motion.div 
                            className="user-info"
                            whileHover={{ scale: 1.02, y: -1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="user-avatar">
                                <FaUser className="w-4 h-4 text-white" />
                            </div>
                            <div className="user-details">
                                <span className="user-name">{session?.user?.email?.split('@')[0]}</span>
                                <span className="user-email">{session?.user?.email}</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Quick Stats */}
                        <motion.div 
                            className="quick-stats"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="stat-card">
                                <div className="flex items-center space-x-2">
                                    <div className="stat-indicator"></div>
                                    <span className="stat-value">Active</span>
                                </div>
                            </div>
                            
                            <div className="stat-card green">
                                <div className="flex items-center space-x-2">
                                    <span className="stat-value green">{logs.length}</span>
                                    <span className="stat-label green">Entries</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Sign Out Button */}
                        <motion.button
                            onClick={handleSignOut}
                            whileHover={{ scale: 1.05, x: 3 }}
                            whileTap={{ scale: 0.95 }}
                            className="sign-out-btn"
                        >
                            <div className="sign-out-icon">
                                <FaSignOutAlt className="w-4 h-4" />
                                <div className="sign-out-indicator"></div>
                            </div>
                            <span className="font-semibold">Sign out</span>
                            <div className="sign-out-dot"></div>
                        </motion.button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
