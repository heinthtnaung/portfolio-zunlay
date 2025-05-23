"use client";
import { motion } from "motion/react";

import { SubTitle, Title } from "@/components/Typography";
import PageTransition from "@/components/Transition/pageTransition";

// Dataset
import { clientSupplier, events } from "@/dataset/whatido";

export default function WhatToDoPage() {
  return (
    <PageTransition>
      <div className="w-full lg:py-28 bg-white text-black lg:flex items-center overflow-auto p-8">
        <div className="lg:container mx-auto grid xl:grid-cols-2 grid-cols-1 gap-4 items-center lg:pt-0 pt-20">
          <div className="h-full grid items-baseline">
            <Title text="What I Do?" className="text-pink-400" />
            <div className="grid h-full items-end">
              <div>
                <SubTitle
                  text="Events"
                  className="text-pink-400 mb-4 md:mt-4"
                />
                <motion.ul
                  className="list-disc space-y-4 pl-6 text-lg text-lg-base/8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visiable"
                >
                  {events.map((e, idx) => (
                    <motion.li key={`events-` + idx} variants={itemVariants}>
                      {e}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>

          <div className="xl:pl-34">
            <SubTitle
              text="Client and Supplier Management"
              className="text-pink-400 mb-4 md:mt-4"
            />
            <motion.ul
              className="list-disc space-y-4 pl-6 text-lg text-lg-base/8 "
              variants={containerVariants}
              initial="hidden"
              whileInView="visiable"
            >
              {clientSupplier.map((e, idx) => (
                <motion.li key={`events-` + idx} variants={itemVariants}>
                  {e}
                </motion.li>
              ))}
            </motion.ul>
            <SubTitle
              text="Social Media Marketing"
              className="text-pink-400 mb-4 lg:mt-12 mt-4"
            />
            <motion.ul
              className="list-disc space-y-4 pl-6  text-lg text-lg-base/8 "
              variants={containerVariants}
              initial="hidden"
              whileInView="visiable"
            >
              {clientSupplier.map((e, idx) => (
                <motion.li key={`events-` + idx} variants={itemVariants}>
                  {e}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

/** Animation */
const containerVariants = {
  hidden: { opacity: 0 },
  visiable: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
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
};
