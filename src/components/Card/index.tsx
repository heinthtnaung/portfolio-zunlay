"use client";

import { SubTitle } from "../Typography";
import { motion } from "motion/react";

export function SimpleCard(props: {
  imagePath: string;
  title: string;
  description: string;
}) {
  const { imagePath, title, description } = props;

  return (
    <div className="max-w-[380px] mx-auto ">
      <picture>
        <motion.img
          src={imagePath}
          alt={`image-${title}`}
          className="rounded-xl h-72 m-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
          }}
        />
      </picture>

      <SubTitle text={title} className="py-4 text-center" />
      <div className="pb-4 text-lg"> {description} </div>
    </div>
  );
}
