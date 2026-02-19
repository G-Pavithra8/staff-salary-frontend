import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        { q: "What metrics are used for evaluation?", a: "Key metrics include attendance consistency, average working hours, punctuality (average minutes late), volume of logbook submissions, task completion rates, and crucial feedback scores. These are combined to provide a holistic view of performance." },
        { q: "How is the salary credit score calculated?", a: "The score is predicted using a sophisticated Random Forest machine learning model. This model is trained on historical performance data to identify complex patterns that influence salary credit scores." },
        { q: "Is the data secure?", a: "We prioritize data security with industry-standard encryption and access controls. All sensitive information is handled with utmost care to ensure privacy and compliance." },
        { q: "Can I request a re-evaluation?", a: "While the system provides an initial data-driven evaluation, specific processes for requesting a re-evaluation or discussing the results are typically handled through your organization's HR department or management. The system's transparency features (like SHAP values) can support these discussions." },
        { q: "How accurate are the predictions?", a: "The Random Forest model is chosen for its high accuracy in predicting outcomes based on complex data. However, it's important to remember that these are predictions based on historical data and should be used as a valuable tool in conjunction with human insight and organizational context." },
         { q: "What are SHAP values and why are they included?", a: "SHAP (SHapley Additive exPlanations) values are a method from Explainable AI (XAI) used to explain individual predictions. They show how much each specific feature (like attendance or task completion) contributes positively or negatively to the final predicted score. We include them to provide transparency and help users understand the factors driving a particular prediction." }
       
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center h-full text-center py-16 px-8"> {/* Consistent padding */}
            <h2 className="text-4xl font-extrabold text-purple-400 mb-10">Frequently Asked Questions</h2>
            {/* Changed to grid layout for two columns on medium and larger screens */}
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left"> {/* Increased max-w, added grid classes and gap */}
                {faqs.map((item, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg shadow-md bg-gray-900 overflow-hidden">
                        <button
                            className="flex justify-between items-center w-full p-5 text-lg font-semibold text-purple-300 focus:outline-none bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span>{item.q}</span>
                             <svg
                                className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div
                            className={`px-5 pt-0 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-screen opacity-100 py-5' : 'max-h-0 opacity-0'}`}
                            aria-hidden={openIndex !== index}
                        >
                            <p className="text-gray-300 leading-relaxed border-t border-gray-700 pt-4">{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;