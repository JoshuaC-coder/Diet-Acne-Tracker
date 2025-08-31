import React from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaHistory, FaChartLine } from 'react-icons/fa';

const TabNavigation = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'log', label: 'Log Entry', icon: FaPlus },
        { id: 'history', label: 'History', icon: FaHistory },
        { id: 'analytics', label: 'Analytics', icon: FaChartLine }
    ];

    return (
        <div className="tab-container">
            <div className="tab-list">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{tab.label}</span>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default TabNavigation;
