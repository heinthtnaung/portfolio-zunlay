"use client";

import localFont from "next/font/local";
import "./globals.css";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const CustomFonts = localFont({
  src: [
    {
      path: "../assets/Fonts/TT Fors/Thin.ttf",
      weight: "300",
      style: "thin",
    },
    {
      path: "../assets/Fonts/TT Fors/Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/Fonts/TT Fors/Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/Fonts/TT Fors/Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/Fonts/TT Fors/Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/Fonts/Archivo/Archivo-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Zun - Portfolio</title>
      </head>
      <body className={`${CustomFonts.className} antialiased bg-white`}>
        <AnimatePresence mode="wait">
          <motion.div key={currentPath}>
            <motion.div
              className="fixed z-10 top-0 left-0 w-full h-full gradient-background origin-bottom"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="fixed z-10 top-0 left-0 w-full h-full bg-[#EF778F] origin-top"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
