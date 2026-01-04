import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks, ${form.name}! We received your message.`);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
            >
                <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
                <p className="text-gray-600 text-center mb-6">
                    Have a question or feedback? Send us a message!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="border-2 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="border-2 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows={4}
                        className="border-2 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-yellow-950 text-white py-2 rounded font-bold hover:scale-105 transition"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
