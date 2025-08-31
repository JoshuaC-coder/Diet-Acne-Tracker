import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from "../supabaseClient";
import DashboardHeader from './DashboardHeader';
import TabNavigation from './TabNavigation';
import LogEntryTab from './LogEntryTab';
import HistoryTab from './HistoryTab';
import AnalyticsTab from './AnalyticsTab';

const Dashboard = () => {
    const { session } = UserAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState('log');
    const [logs, setLogs] = useState([]);
    const [isLogging, setIsLogging] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);

    // Check authentication
    useEffect(() => {
        if (!session) {
            navigate("/");
        }
    }, [session, navigate]);

    // Fetch logs from Supabase
    useEffect(() => {
        const fetchLogs = async () => {
            if (!session?.user?.id) return;
            
            try {
                const { data, error } = await supabase
                    .from('user_logs')
                    .select('*')
                    .eq('user_id', session.user.id)
                    .order('timestamp', { ascending: false });
                
                if (error) {
                    console.error('Error fetching logs:', error);
                    setError('Failed to load your logs');
                } else {
                    setLogs(data || []);
                }
            } catch (err) {
                console.error('Error fetching logs:', err);
                setError('Failed to load your logs');
            } finally {
                setIsLoading(false);
            }
        };

        fetchLogs();
    }, [session?.user?.id]);

    const handleSubmitLog = async (formData) => {
        setIsLogging(true);
        setError('');
        
        try {
            // Prepare data for Supabase
            const logData = {
                user_id: session.user.id,
                acne_severity: formData.acneSeverity,
                diet: formData.diet,
                sleep: formData.sleep,
                stress: formData.stress,
                water: formData.water,
                skincare_routine: formData.skincareRoutine,
                notes: formData.notes
            };
            
            // Save to Supabase
            const { data, error } = await supabase
                .from('user_logs')
                .insert([logData])
                .select();
            
            if (error) {
                console.error('Error saving log:', error);
                setError('Failed to save log entry');
            } else {
                // Add to local state
                setLogs(prev => [data[0], ...prev]);
                
                // Show success animation
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                }, 3000); // Hide after 3 seconds
            }
        } catch (err) {
            console.error('Error:', err);
            setError('An unexpected error occurred');
        } finally {
            setIsLogging(false);
        }
    };

    // Tab content mapping
    const tabContent = {
        log: <LogEntryTab onSubmitLog={handleSubmitLog} isLogging={isLogging} showSuccess={showSuccess} error={error} />,
        history: <HistoryTab logs={logs} isLoading={isLoading} />,
        analytics: <AnalyticsTab logs={logs} />
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <DashboardHeader logs={logs} />

            {/* Main Content */}
            <div className="dashboard-main">
                {/* Welcome Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="welcome-section"
                >
                    <h2 className="welcome-title">Welcome back!</h2>
                    <p className="welcome-subtitle">Track your skin health journey with precision</p>
                </motion.div>

                {/* Tab Navigation */}
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {tabContent[activeTab]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Dashboard;