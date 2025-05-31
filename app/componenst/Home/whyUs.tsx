"use client";

import { Box, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const reasons = [
  {
    title: "One-Stop Business Hub",
    // title: "All Business Solutions Under One Umbrella",
    content:
      "At Dunlin Ltd., we are committed to providing comprehensive business solutions that are both cost-effective and delivered by expert professionals. Our approach ensures that your business benefits from top-tier services without compromising on quality or budget.",
  },
  {
    title: "Employee Empowerment",
    content:
      "Prioritizing growth and well-being, we foster a creative environment and share 25% of our profits with our team.",
  },
  {
    title: "Diverse Expertise",
    content:
      "Our services span process development, redesigning the control system, infrastructure development, IT solutions, and BPO services, ensuring comprehensive support for your needs.",
  },
  {
    title: "Strategic Collaborations",
    content:
      "Through partnerships and joint ventures, we leverage specialized expertise to deliver top-tier services.",
  },
  {
    title: "Global Reach",
    content:
      "While rooted locally, our services extend globally, embracing opportunities without borders.",
  },
  {
    title: "Social Responsibility",
    content:
      "Dedicating 10% of our profits to CSR initiatives, we focus on policy dialogue, education, healthcare, and community development.",
  },
];

export default function WhyUsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box sx={{ py: 12, px: { xs: 2, sm: 4, md: 6 }, }}>
      <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 6 }}>
        Why Us
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
        }}
      >
        {reasons.map((reason, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-green-900 dark:text-green-100"
            >
              <Card
                component={motion.div}
                whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 200 }}
                sx={{ p: 4, borderRadius: 3, height: "100%", bgcolor: "rgba(100, 250, 160,1)" }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {reason.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: isExpanded ? "unset" : 2,
                    textOverflow: "ellipsis",
                    my:2,
                  }}
                >
                  {reason.content}
                </Typography>
                {reason.content.length > 100 && (
                  <motion.button
                    onClick={() => handleToggle(index)}
                    className="mt-2 text-lime-100 hover:text-green-100 transition-colors duration-200 bg-green-500 hover:bg-green-600  font-semibold py-2 px-4 rounded"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </motion.button>
                )}

              </Card>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
}
