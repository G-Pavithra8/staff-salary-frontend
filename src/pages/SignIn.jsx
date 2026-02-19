import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Basic validation
        if (!email || !password) {
            setError('Please fill in both email and password.');
            return;
        }

        // Retrieve user data from local storage
        const storedPassword = localStorage.getItem(email);

        // Check if user exists and password matches
        if (!storedPassword || storedPassword !== password) {
            setError('Invalid email or password.');
            return;
        }

        // Store a flag or user identifier in local storage to indicate authentication
        // In a real app, this might be a token
        localStorage.setItem('user', email); // Simple authentication flag

        // Redirect to the main page
        navigate('/main');
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-purple-300 text-center">Sign In</h2>

                {error && (
                    <div className="bg-red-800 text-red-200 p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label className="block text-purple-200 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm appearance-none border border-gray-600 rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-800 placeholder-gray-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-purple-200 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow-sm appearance-none border border-gray-600 rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-800 placeholder-gray-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                        >
                            Sign In
                        </button>
                        <a
                            href="/signup"
                            className="inline-block align-baseline font-bold text-sm text-purple-400 hover:text-purple-300"
                        >
                            Don't have an account? Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn; 