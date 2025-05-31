"use client";

import { Box, Card, Typography, Rating } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ReviewsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      company: "Acme Corp",
      review:
        "Dunline provided exceptional service and transformed our workflow.",
      stars: 5,
    },
    {
      company: "BizTech Solutions",
      review:
        "Reliable platform with great customer support. Highly recommend Dunline.",
      stars: 4,
    },
    {
      company: "Greenline Industries",
      review: "Smooth integration and user-friendly interface. We trust Dunline.",
      stars: 5,
    },
    {
      company: "Nova Enterprises",
      review:
        "Professional team and excellent delivery. Dunline made a difference.",
      stars: 4,
    },
    {
      company: "Velocity Ventures",
      review: "Dunline exceeded our expectations in every way.",
      stars: 5,
    },
    {
      company: "Orion Holdings",
      review: "Great value for money and top-notch service.",
      stars: 4,
    },
    {
      company: "Zenith Tech",
      review: "Innovative and dependable — exactly what we needed.",
      stars: 5,
    },
    {
      company: "Skyway Group",
      review: "Impressed with the platform and overall experience.",
      stars: 4,
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews]; // Seamless loop

  return (
    <div className="w-6/7 mx-auto">

      <Box
        sx={{
          overflow: "hidden",
          my: {
            xs: 0,     // Optional: default for mobile
            lg: 0,
            xl: 0,
            "2xl": 4
          },
          position: "relative",
          color: 'white',
          zIndex: 10
          // background: 'linear-gradient(to right, black, red)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-bold text-2xl"
        >
          Trusted by Customers and Experts
        </motion.div>

          <Box
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            sx={{
              whiteSpace: "nowrap",
              overflowX: "auto", // <-- enables horizontal scroll
              cursor: "grab",    // <-- optional UX enhancement
              "&::-webkit-scrollbar": { display: "none" }, // hides scrollbar (optional)
            }}
          >
            <motion.div

              animate={{
                x: isPaused ? 0 : ["0%", "-50%"], // Only half way since it's duplicated
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 90,
                  ease: "linear",
                },
              }}
              style={{
                display: "inline-flex",
                gap: "1rem",
              }}
            >
              {duplicatedReviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      minWidth: 250,
                      p: 2,
                      boxShadow: 0,
                      backgroundColor: "transparent",
                      color: 'white',
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {review.company}
                    </Typography>
                    <Rating value={review.stars} readOnly />
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        width: '300px',             // constrain width
                        wordBreak: 'break-word',    // wrap long words
                        whiteSpace: 'normal',       // allow wrapping
                      }}
                    >
                      &quot;{review.review}&quot;
                    </Typography>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Box>
      </Box>
    </div>
  );
}
