import React from 'react'
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/common/Nav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-[#0b0d17] text-white overflow-hidden"}>
      <div className={"relative"} >
        <Nav />
        {children}
      </div>
      </body>
    </html>
  );
}
