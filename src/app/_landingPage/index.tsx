"use client";

import { motion } from "motion/react";
import { Title } from "@/components/Typography";
import PageTransition from "@/components/Transition/pageTransition";

const LandingPage = () => {
  return (
    <PageTransition>
      <div className="gradient-background w-screen h-screen grid items-center justify-center text-center">
        <div>
          <Title text="Hi, I'm ZUN" />
          <div className="text-2xl my-4 font-normal">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 3,
              }}
            >
              who’s fun being in a marketing field
            </motion.p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LandingPage;
