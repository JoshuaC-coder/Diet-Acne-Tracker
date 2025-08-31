import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaEye } from 'react-icons/fa';

const HistoryTab = ({ logs, isLoading }) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getSeverityColor = (severity) => {
        const colors = {
            1: 'bg-green-100 text-green-800',
            2: 'bg-yellow-100 text-yellow-800',
            3: 'bg-orange-100 text-orange-800',
            4: 'bg-red-100 text-red-800',
            5: 'bg-purple-100 text-purple-800'
        };
        return colors[severity] || colors[1];
    };

    const getSeverityText = (severity) => {
        const texts = {
            1: 'Clear',
            2: 'Mild',
            3: 'Moderate',
            4: 'Severe',
            5: 'Very Severe'
        };
        return texts[severity] || 'Clear';
    };

    if (isLoading) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center py-12"
            >
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff6b6b]"></div>
            </motion.div>
        );
    }

    if (logs.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
            >
                <div className="bg-gray-50 rounded-2xl p-8">
                    <FaCalendarAlt className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No logs yet</h3>
                    <p className="text-gray-500">Start tracking your skin health journey by creating your first log entry!</p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Log History</h3>
                
                <div className="space-y-4">
                    {logs.map((log, index) => (
                        <motion.div
                            key={log.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <FaCalendarAlt className="w-4 h-4" />
                                        <span>{formatDate(log.timestamp)}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <FaClock className="w-4 h-4" />
                                        <span>{formatTime(log.timestamp)}</span>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(log.acne_severity)}`}>
                                    {getSeverityText(log.acne_severity)}
                                </span>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Diet */}
                                {log.diet && (
                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            Diet
                                        </h4>
                                        <p className="text-gray-600 text-sm line-clamp-3">{log.diet}</p>
                                    </div>
                                )}

                                {/* Sleep */}
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                        Sleep
                                    </h4>
                                    <p className="text-gray-600 text-sm">{log.sleep} hours</p>
                                </div>

                                {/* Stress */}
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        Stress
                                    </h4>
                                    <p className="text-gray-600 text-sm">{log.stress}/10</p>
                                </div>

                                {/* Water */}
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                        Water
                                    </h4>
                                    <p className="text-gray-600 text-sm">{log.water} glasses</p>
                                </div>

                                {/* Skincare */}
                                {log.skincare_routine && (
                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                            Skincare
                                        </h4>
                                        <p className="text-gray-600 text-sm line-clamp-3">{log.skincare_routine}</p>
                                    </div>
                                )}

                                {/* Notes */}
                                {log.notes && (
                                    <div className="bg-white rounded-lg p-4 border border-gray-200 md:col-span-2 lg:col-span-1">
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Notes
                                        </h4>
                                        <p className="text-gray-600 text-sm line-clamp-3">{log.notes}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default HistoryTab;
