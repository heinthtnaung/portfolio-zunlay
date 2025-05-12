"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Title(props: { text: string; className?: string }) {
  const { text, className } = props;

  return (
    <div
      className={`md:text-7xl text-5xl font-black ${
        className ?? ""
      } relative overflow-hidden`}
    >
      {text.split("").map((t, idx) => (
        <motion.span
          key={`${t + idx}`}
          initial={{ opacity: 0, bottom: "-50px", position: "relative" }}
          whileInView={{ opacity: 1, bottom: "0px" }}
          transition={{
            duration: 0.2,
            delay: 0.05 * idx,
          }}
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

export function SubTitle(props: { text: string; className?: string }) {
  const { text, className } = props;
  return (
    <motion.div
      className={`w-full md:text-2xl text-xl font-black ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visiable"
    >
      {text.split(" ").map((t, idx) => (
        <motion.div
          className="pr-2 inline-block"
          key={`${t + idx}`}
          variants={itemVariants}
        >
          {t + " "}
        </motion.div>
      ))}
    </motion.div>
  );
}

/** Animation */
const containerVariants = {
  hidden: { opacity: 0 },
  visiable: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visiable: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  transition: {
    duration: 0.1,
  },
};
