"use client";

import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const subSlogans = [
    "Redefining Business Excellence!",
    "Unlock Savings, Boost up Profitability!",
    "Empowering Your Business, Elevating Your Future!",
    "Partner with Dunlin – Soar Toward Your Dreams!",
];

export default function BannerSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % subSlogans.length);
        }, 4000); // every 4 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <Box
            sx={{
                // height: "70vh",
                display: "flex",
                // alignItems: "ce",
                justifyContent: "space-between",
                color: "white",
                textAlign: "left",
                flexDirection: "column",
                paddingTop: '100px',
                paddingBottom: {
                    xs: '100%',     // Mobile
                    sm: '90%',      // Small tablets
                    md: '10px',      // Tablets & small laptops
                    lg: '20px',   // Laptops/desktops
                    xl: '50px',   // Large desktops
                },
                position: 'relative',
            }}
        >
            <div className="w-6/7 mx-auto z-10">
                <div className="w-2/3">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Typography variant="h1" fontWeight="bold" sx={{ mb: 1 }} >
                            Sailing You Into The Future!
                        </Typography>
                    </motion.div>
                    <Box sx={{ position: "relative" }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                                style={{ width: "100%" }}
                            >
                                <Typography variant="h5" className="text-4xl">
                                    {subSlogans[index]}
                                </Typography>
                            </motion.div>
                        </AnimatePresence>
                    </Box>
                    <motion.button
                        initial={{ opacity: 0, y: 45, }}
                        animate={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        className="border-2 px-5 py-3 rounded-4xl mt-8 hover:text-green-100 hover:bg-green-800 transition-all cursor-pointer hover:shadow-gray-800 hover:shadow-md"
                    >
                        Get Started
                    </motion.button>
                </div>
            </div>
            {/* Main Slogan */}

            {/* Rotating Sub-Slogans */}
        </Box>
    );
}
