import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false); // State to control confirmation pop-up

    const performLogout = () => {
        // Remove the authentication flag from local storage
        localStorage.removeItem('user');
        // Redirect to the sign-in page
        navigate('/signin');
    };

    const handleLogoutClick = () => {
        setShowLogoutConfirm(true); // Show the confirmation pop-up
    };

    const handleConfirmLogout = () => {
        performLogout(); // Perform the logout action
        setShowLogoutConfirm(false); // Hide the pop-up
    };

    const handleCancelLogout = () => {
        setShowLogoutConfirm(false); // Hide the pop-up without logging out
    };

    return (
        <nav className="bg-gray-900 text-gray-200 p-4 fixed w-full top-0 z-10 shadow-lg border-b border-gray-700">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-purple-400 font-bold text-xl">Staff Credits System</div>
                <div>
                    <a href="/main#home" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded transition duration-300 ease-in-out">Home</a>
                    <a href="/main#about" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded transition duration-300 ease-in-out">About</a>
                    <a href="/staff-evaluation" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded transition duration-300 ease-in-out">Staff Evaluation</a>
                    <a href="/main#faq" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded transition duration-300 ease-in-out">Help</a>
                    <a href="/main#contact" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded transition duration-300 ease-in-out">Contact</a>
                    <button
                        onClick={handleLogoutClick}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 transition duration-300 ease-in-out"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Logout Confirmation Pop-up */}
            {showLogoutConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> {/* Dim background */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 text-center">
                        <p className="text-lg font-semibold mb-6 text-gray-200">Are you sure you want to log out?</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleConfirmLogout}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={handleCancelLogout}
                                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Dashboard; 