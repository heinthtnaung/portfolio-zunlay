"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
  return (
    <html lang="en">
      <head>
        <title>Zun - Portfolio</title>
      </head>
      <body className={`${CustomFonts.className} antialiased`}>{children}</body>
    </html>
  );
}
