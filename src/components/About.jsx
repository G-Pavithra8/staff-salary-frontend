import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center h-full text-center py-16 px-8">
            <h2 className="text-4xl font-extrabold text-purple-400 mb-10">About This System</h2>
            <div className="max-w-6xl mx-auto text-gray-200 space-y-8 text-left">
                <p className="text-lg leading-relaxed">
                    The Staff Credits System is meticulously designed to provide a fair, transparent, and highly data-driven approach to staff performance evaluation. Our innovative methodology seamlessly integrates crucial key performance indicators with cutting-edge machine learning techniques to deliver a truly comprehensive and insightful assessment of each team member's contribution.
                </p>
                <p className="text-lg leading-relaxed">
                    We gather and analyze a carefully selected set of relevant data points, including metrics such as attendance percentage, average working hours, punctuality (average minutes late), volume of logbook submissions, task completion rates, and critical feedback scores. Each of these metrics plays a vital role in constructing a holistic view of an employee's performance and overall contribution within the organizational structure.
                </p>
                <div className="bg-gray-900 p-6 rounded-lg border border-purple-700 shadow-lg animate-fade-in">
                     <h3 className="text-xl font-bold text-purple-300 mb-3">Powered by Advanced Machine Learning</h3>
                     <p className="text-lg leading-relaxed text-gray-300">
                        At the technological core of our system lies a powerful and robust trained machine learning model. Specifically, we utilize a <strong>Random Forest model</strong>, renowned for its accuracy and ability to handle complex datasets. This model has been extensively trained on historical staff performance data to precisely identify intricate patterns and significant relationships between various performance metrics and the resulting salary credit scores.
                    </p>
                </div>

                 <div className="bg-gray-900 p-6 rounded-lg border border-purple-700 shadow-lg animate-fade-in delay-200">
                     <h3 className="text-xl font-bold text-purple-300 mb-3">Unlocking Transparency with Explainable AI (SHAP)</h3>
                     <p className="text-lg leading-relaxed text-gray-300">
                        Transparency is paramount in our evaluations. That's why a key distinguishing feature of our system is the seamless integration of <strong>Explainable AI (XAI)</strong>, specifically utilizing <strong>SHAP (SHapley Additive exPlanations)</strong> values. This powerful technique moves beyond a simple prediction, providing a clear and intuitive breakdown of exactly how each individual feature (like attendance or feedback score) contributes to the predicted salary credit score. You gain true insight, understanding not just the outcome, but the driving factors behind it.
                    </p>
                 </div>

                 <p className="text-lg leading-relaxed">
                    Our overarching objective is to empower both management and staff members. By providing objective evaluations coupled with understandable explanations, we aim to facilitate more constructive and insightful performance discussions, accurately identify specific areas ripe for targeted development and improvement, effectively recognize and reward high performance, and ultimately contribute to fostering a more productive, engaged, and thriving workforce across the entire organization.
                </p>
            </div>
        </div>
    );
};

export default About; 