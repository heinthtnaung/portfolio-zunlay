"use client";

import { motion } from "motion/react";

export default function PageTransition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
}
