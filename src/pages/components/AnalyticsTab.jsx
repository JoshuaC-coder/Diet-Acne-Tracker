import React from 'react';
import { motion } from 'framer-motion';
import { 
    LineChart, 
    AreaChart, 
    BarChart, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer, 
    Line, 
    Area, 
    Bar 
} from 'recharts';
import { 
    FaChartLine, 
    FaChartBar, 
    FaChartArea, 
    FaArrowUp,
    FaBed,
    FaTint,
    FaUtensils,
    FaSprayCan
} from 'react-icons/fa';

const AnalyticsTab = ({ logs }) => {
    const prepareChartData = () => {
        if (!logs || logs.length === 0) return [];
        
        return logs.slice(-10).map(log => ({
            date: new Date(log.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            acneSeverity: log.acne_severity,
            sleep: log.sleep,
            stress: log.stress,
            water: log.water,
            timestamp: log.timestamp
        }));
    };

    const chartData = prepareChartData();

    const calculateAverages = () => {
        if (!logs || logs.length === 0) return {};
        
        const totals = logs.reduce((acc, log) => ({
            acneSeverity: acc.acneSeverity + log.acne_severity,
            sleep: acc.sleep + log.sleep,
            stress: acc.stress + log.stress,
            water: acc.water + log.water
        }), { acneSeverity: 0, sleep: 0, stress: 0, water: 0 });

        const count = logs.length;
        return {
            acneSeverity: (totals.acneSeverity / count).toFixed(1),
            sleep: (totals.sleep / count).toFixed(1),
            stress: (totals.stress / count).toFixed(1),
            water: (totals.water / count).toFixed(1)
        };
    };

    const averages = calculateAverages();

    const getSeverityColor = (severity) => {
        const colors = {
            1: '#10b981',
            2: '#f59e0b',
            3: '#f97316',
            4: '#ef4444',
            5: '#8b5cf6'
        };
        return colors[severity] || colors[1];
    };

    if (logs.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
            >
                <div className="bg-gray-50 rounded-2xl p-8">
                    <FaChartLine className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No data to analyze</h3>
                    <p className="text-gray-500">Create some log entries to see your analytics!</p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-blue-600 font-semibold">Avg Acne Severity</p>
                            <p className="text-3xl font-bold text-blue-800">{averages.acneSeverity}</p>
                        </div>
                        <FaArrowUp className="w-8 h-8 text-blue-600" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-purple-600 font-semibold">Avg Sleep</p>
                            <p className="text-3xl font-bold text-purple-800">{averages.sleep}h</p>
                        </div>
                        <FaBed className="w-8 h-8 text-purple-600" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border border-cyan-200"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-cyan-600 font-semibold">Avg Water</p>
                            <p className="text-3xl font-bold text-cyan-800">{averages.water} glasses</p>
                        </div>
                        <FaTint className="w-8 h-8 text-cyan-600" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-orange-600 font-semibold">Avg Stress</p>
                            <p className="text-3xl font-bold text-orange-800">{averages.stress}/10</p>
                        </div>
                        <FaUtensils className="w-8 h-8 text-orange-600" />
                    </div>
                </motion.div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Acne Severity Trend */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaChartArea className="w-5 h-5 text-[#ff6b6b]" />
                        Acne Severity Trend
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="date" stroke="#666" />
                            <YAxis stroke="#666" domain={[0, 5]} />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'white', 
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px'
                                }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="acneSeverity" 
                                stroke="#ff6b6b" 
                                fill="#ff6b6b" 
                                fillOpacity={0.3}
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Sleep & Water Comparison */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaChartBar className="w-5 h-5 text-[#ff6b6b]" />
                        Sleep & Water Comparison
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="date" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'white', 
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px'
                                }}
                            />
                            <Bar dataKey="sleep" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="water" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Stress Level Trend */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaChartLine className="w-5 h-5 text-[#ff6b6b]" />
                        Stress Level Trend
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="date" stroke="#666" />
                            <YAxis stroke="#666" domain={[0, 10]} />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'white', 
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px'
                                }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="stress" 
                                stroke="#f97316" 
                                strokeWidth={3}
                                dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* All Metrics Overview */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaArrowUp className="w-5 h-5 text-[#ff6b6b]" />
                        All Metrics Overview
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="date" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'white', 
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px'
                                }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="acneSeverity" 
                                stroke="#ff6b6b" 
                                strokeWidth={2}
                                name="Acne Severity"
                            />
                            <Line 
                                type="monotone" 
                                dataKey="sleep" 
                                stroke="#8b5cf6" 
                                strokeWidth={2}
                                name="Sleep"
                            />
                            <Line 
                                type="monotone" 
                                dataKey="water" 
                                stroke="#06b6d4" 
                                strokeWidth={2}
                                name="Water"
                            />
                            <Line 
                                type="monotone" 
                                dataKey="stress" 
                                stroke="#f97316" 
                                strokeWidth={2}
                                name="Stress"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AnalyticsTab;
