import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_ru6lkhi";      // your service id
const TEMPLATE_ID = "template_p2525zo";    // your template id
const PUBLIC_KEY = "jECA-FiDZwEnJvxNB";     // your public key

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter valid email";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
        // Allow only alphabets and space
        const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
        setFormData({
            ...formData,
            name: onlyLetters,
        });
        return;
    }

    setFormData({
        ...formData,
        [name]: value,
    });
};


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("sending");

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                PUBLIC_KEY
            );

            setStatus("sent");
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <div className="flex flex-col items-center h-full text-center py-16 px-8">
            <h2 className="text-4xl font-extrabold text-purple-400 mb-10">
                Get in Touch
            </h2>

            <div className="max-w-3xl w-full mx-auto text-gray-200 space-y-8 text-left">

                {/* Contact Info */}
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg">
                    <h3 className="text-xl font-bold text-purple-300 mb-4 text-center">
                        Contact Information
                    </h3>
                    <p className="text-gray-300 text-center">
                        Email: support@staffcreditssystem.com
                    </p>
                    <p className="text-gray-300 text-center mt-2">
                        Phone: (123) 456-7890
                    </p>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg">
                    <h3 className="text-xl font-bold text-purple-300 mb-4 text-center">
                        Send us a Message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full py-2 px-3 rounded-md bg-gray-800 border border-gray-600 text-gray-100"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-400">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full py-2 px-3 rounded-md bg-gray-800 border border-gray-600 text-gray-100"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-400">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full py-2 px-3 rounded-md bg-gray-800 border border-gray-600 text-gray-100"
                            ></textarea>
                            {errors.message && (
                                <p className="text-sm text-red-400">{errors.message}</p>
                            )}
                        </div>

                        <div className="text-center mt-6">
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-lg transition"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>

                    {status === "sent" && (
                        <div className="mt-4 text-green-400 text-center">
                            ✅ Message sent successfully!
                        </div>
                    )}

                    {status === "error" && (
                        <div className="mt-4 text-red-400 text-center">
                            ❌ Something went wrong. Try again.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
