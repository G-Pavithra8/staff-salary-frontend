import React from 'react';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const MainPage = () => {
    return (
        <div className="bg-gray-950 text-gray-200">
            <Dashboard />
            <div className="container mx-auto p-8">
                {/* Content sections with further reduced vertical padding */}
                <section id="home" className="min-h-screen py-8"><Home /></section> {/* Further reduced padding */}
                <hr className="border-gray-800 my-8"/> {/* Divider */}
                <section id="about" className="min-h-screen py-8"><About /></section> {/* Further reduced padding */}
                <hr className="border-gray-800 my-8"/> {/* Divider */}
                <section id="faq" className="min-h-screen py-8"><FAQ /></section> {/* Further reduced padding */}
                <hr className="border-gray-800 my-8"/> {/* Divider */}
                <section id="contact" className="min-h-screen py-8"><Contact /></section> {/* Further reduced padding */}
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;