import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center h-full text-center py-16 px-8">
            <h2 className="text-5xl font-extrabold text-purple-400 mb-12 animate-fade-in-down">Welcome to Your Staff Credits System</h2>
            <div className="max-w-6xl mx-auto text-gray-200 space-y-12">
                <p className="text-2xl font-semibold leading-relaxed animate-fade-in-up">
                    Gain valuable, actionable insights into staff performance and accurately predict salary credit scores with our advanced, data-driven platform. Empower your organization to make informed decisions and foster a culture of growth.
                </p>

                <div className="text-left space-y-8 text-gray-300">
                    <p className="text-lg leading-relaxed animate-fade-in-up delay-100">
                        In today's dynamic and fiercely competitive business environment, truly understanding and effectively nurturing your team's performance is not merely an advantage – it is an absolute necessity for driving sustainable organizational success and achieving strategic goals. Our meticulously designed system offers a robust and comprehensive framework, specifically engineered to rigorously evaluate the key performance indicators (KPIs) that genuinely matter within your organization. This ensures a performance review process that is consistently fair, completely transparent, and delivers truly insightful and actionable feedback.
                    </p>
                    
                    <p className="text-lg leading-relaxed animate-fade-in-up delay-300">
                        We are deeply committed to fostering an environment of transparency and profound understanding. This commitment is why our platform deliberately goes far beyond simply presenting a numerical score. Through a sophisticated suite of intuitive and fully interactive visualizations, including detailed explanations powered by state-of-the-art methodologies like SHAP (SHapley Additive exPlanations) values, users can effortlessly explore and gain a deep understanding of the 'why' that underpins each individual prediction, clearly seeing precisely how each specific performance factor contributes to the final calculated outcome.
                    </p>
                   
                </div>

                 <p className="text-xl font-semibold leading-relaxed text-purple-300 animate-fade-in-up delay-500">
                   Ready to transform your staff evaluation process, gain deeper insights into performance, and unlock the full potential within your team? Sign in or sign up today to experience the power and clarity of the Staff Credits System.
                </p>
            </div>
            {/* Optional: Add an image or illustration later */}
        </div>
    );
};

export default Home; 