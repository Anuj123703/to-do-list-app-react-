import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center"
            >
                <motion.img
                    src="/logo.jpeg"
                    alt="logo"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-20 h-20 mx-auto rounded-full mb-4"
                />

                {/* Heading */}
                <h1 className="text-2xl font-extrabold">Smart Todo App</h1>

                <p className="text-gray-600 mt-2">
                    Organize your tasks. Boost productivity.
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3 text-left">
                    {[
                        "Save Todos Locally",
                        "Edit & Delete Tasks",
                        "Hide Completed Todos",
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + i * 0.2 }}
                            className="flex items-center gap-2"
                        >
                            <span className="text-green-600 font-bold">✓</span>
                            <span>{feature}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 w-full bg-stone-900 text-white py-3 rounded-lg font-bold"
                    onClick={() => navigate("/Your_todos")}
                >
                    Get Started
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Home;
