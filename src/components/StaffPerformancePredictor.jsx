// src/components/StaffPerformancePredictor.js
import React, { useState, useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const StaffPerformancePredictor = () => {
    // State for input features
    const [features, setFeatures] = useState({
        attendance_percentage: '',
        avg_working_hours: '',
        avg_minutes_late: '',
        logbook_submissions: '',
        task_completion_rate: '',
        feedback_score: '',
    });

    // State for prediction results
    const [prediction, setPrediction] = useState(null);
    const [shapData, setShapData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Ref for the results section to scroll to it
    const resultsRef = useRef(null);

    // Handle input change
    const handleChange = (e) => {
        setFeatures({
            ...features,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setPrediction(null);
        setShapData(null);

        // Basic validation (can be enhanced)
        const inputData = {};
        for (const key in features) {
            // Convert to number, check if valid
            const value = parseFloat(features[key]);
            if (isNaN(value)) {
                setError(`Invalid input for ${key.replace('_', ' ')}. Please enter a number.`);
                setLoading(false);
                return;
            }
            inputData[key] = value;
        }

        try {
            const response = await fetch('https://staff-salary-backend.onrender.com/predict', { // Adjust URL if your Flask server runs on a different port
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Prediction failed');
            }

            const data = await response.json();
            setPrediction(data.salary_credit_score);
            setShapData({
                labels: data.feature_names,
                values: data.shap_values
            });

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Scroll to results section when prediction is available
    useEffect(() => {
        if (prediction !== null && resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [prediction]);

    // Data structure for the SHAP bar chart
    const chartData = shapData ? {
        labels: shapData.labels,
        datasets: [
            {
                label: 'SHAP Value',
                data: shapData.values,
                backgroundColor: shapData.values.map(value => value > 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'), // Green for positive, Red for negative
                borderColor: shapData.values.map(value => value > 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
                borderWidth: 1,
            },
        ],
    } : null;

    // Options for the SHAP bar chart (dark theme)
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Allows control of height
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#E9D5FF', // purple-300 for contrast
                },
            },
            title: {
                display: true,
                text: 'Feature Contributions (SHAP Values)',
                color: '#F3E8FF', // purple-200 for contrast
                font: {
                    size: 18, // Slightly larger title
                }
            },
            tooltip: {
                 callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.parsed.y.toFixed(3)}`; // Format SHAP value
                        return label;
                    }
                },
                titleColor: '#F3E8FF', // purple-200
                bodyColor: '#E9D5FF', // purple-300
                backgroundColor: 'rgba(55, 65, 81, 0.8)', // gray-700 with transparency
                borderColor: '#6D28D9', // violet-700
                borderWidth: 1,
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#D8B4FE', // purple-300
                },
                grid: {
                    color: '#4A5568', // gray-600
                }
            },
            y: {
                ticks: {
                    color: '#D8B4FE', // purple-300
                },
                grid: {
                    color: '#4A5568', // gray-600
                }
            },
        },
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-400">
                    Staff Performance Predictor
                </h1>

                <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl shadow-lg mb-10 border border-gray-700">
                    <h2 className="text-2xl font-bold mb-7 text-purple-300 text-center">
                        Enter Staff Performance Data
                    </h2>

                    {error && (
                        <div className="bg-red-800 text-red-200 p-4 rounded mb-6 border border-red-700">
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {Object.keys(features).map((key) => (
                            <div key={key}>
                                <label htmlFor={key} className="block text-purple-200 text-sm font-semibold mb-2 capitalize">
                                    {key.replace('_', ' ')}:
                                </label>
                                <input
                                    type="number"
                                    id={key}
                                    name={key}
                                    value={features[key]}
                                    onChange={handleChange}
                                    step="0.01"
                                    required
                                    className="shadow-sm appearance-none border border-gray-600 rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-800 placeholder-gray-500"
                                    placeholder={`Enter value for ${key.replace('_', ' ')}`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center mt-9">
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? 'Predicting...' : 'Predict Score'}
                        </button>
                    </div>
                </form>

                {prediction !== null && (
                    <div ref={resultsRef} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mt-10">
                        <h2 className="text-2xl font-bold mb-7 text-purple-300 text-center">
                            Prediction Results
                        </h2>

                        <div className="mb-9 text-center bg-gray-800 p-6 rounded-lg border border-gray-600">
                            <p className="text-xl text-gray-300 mb-4">Predicted Salary Credit Score:</p>
                            <p className="text-5xl font-extrabold text-green-400 animate-pulse">{prediction.toFixed(2)}</p>
                        </div>

                        <hr className="border-gray-700 my-8"/>

                        {shapData && (
                            <div>
                                <h3 className="text-xl font-semibold mb-6 text-purple-200 text-center">
                                    Explanation of Prediction (SHAP Values)
                                </h3>
                                <div className="h-80 md:h-96 w-full">
                                     <Bar data={chartData} options={chartOptions} />
                                </div>
                                <p className="text-sm text-gray-400 mt-6 text-center italic">
                                    Bars show how each feature contributes to the predicted score. Green bars indicate a positive contribution, red bars indicate a negative contribution.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StaffPerformancePredictor;