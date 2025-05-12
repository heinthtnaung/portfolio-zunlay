"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

import { PageList } from "@/dataset/pageList";
import { usePathname } from "next/navigation";

export default function NavigaionMenu() {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className="fixed right-0 top-0 p-8 z-20">
      <div
        className={`fixed right-4 top-4 p-8 md:w-auto sm:w-screen sm:right-0`}
      >
        <div
          className={`absolute top-1 right-3 cursor-pointer z-10 w-14 h-14 flex px-2 ${
            !toggle ? "bg-[#a57fee]/40" : ""
          }`}
          onClick={() => setToggle(!toggle)}
        >
          <div className="relative pt-4">
            <span
              className={`absolute h-1 w-10 bg-white transform transition duration-500 ease-in-out ${
                toggle ? "rotate-45 bg-zinc-600" : ""
              }`}
            ></span>
            <span
              className={`absolute h-1 w-10 bg-white transform transition duration-500 ease-in-out ${
                toggle ? "opacity-0" : "opacity-100 translate-y-2.5"
              }`}
            ></span>
            <span
              className={`absolute h-1 w-10 bg-white transform transition duration-500 ease-in-out ${
                toggle ? "-rotate-45 bg-zinc-600" : "translate-y-5"
              }`}
            ></span>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {toggle && (
            <motion.div
              className="mt-4 cursor-pointer px-2 py-8 rounded-2xl  bg-[#eadfff]/40 backdrop-blur-xl "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              {PageList.map((pl, idx) => (
                <div key={`navi_${idx}`} className={`px-4 py-2 text-right`}>
                  <Link href={pl.path} onClick={() => setToggle(false)}>
                    <div className="flex justify-end items-center">
                      <span
                        className={`
                    px-4 py-1 font-bold
                    ${
                      pathname === pl.path
                        ? " bg-pink-400 rounded-full"
                        : " text-zinc-800"
                    }`}
                      >
                        {pl.title}
                      </span>
                      <div
                        className={`
                 w-4 h-4 rounded-full ml-4 opacity-30 ring-1 ring-white
                 ${pathname === pl.path ? " bg-pink-400" : "bg-zinc-400"}
                `}
                      ></div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
