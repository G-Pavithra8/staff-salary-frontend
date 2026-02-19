import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Basic validation
        if (!email || !password) {
            setError('Please fill in both email and password.');
            return;
        }

        // In a real application, you would hash the password before storing.
        // For demonstration with local storage, we'll store as plain text.
        // Check if a user with this email already exists
        const existingUser = localStorage.getItem(email);
        if (existingUser) {
            setError('User with this email already exists.');
            return;
        }

        // Store user data in local storage (email as key, password as value)
        localStorage.setItem(email, password);

        // Redirect to sign-in page
        navigate('/signin');
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-purple-300 text-center">Sign Up</h2>

                {error && (
                    <div className="bg-red-800 text-red-200 p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSignUp}>
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
                            Sign Up
                        </button>
                        <a
                            href="/signin"
                            className="inline-block align-baseline font-bold text-sm text-purple-400 hover:text-purple-300"
                        >
                            Already have an account? Sign In
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp; 