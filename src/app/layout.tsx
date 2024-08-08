import type { Metadata } from "next";
import "../styles/global.scss";
import React from "react";
import HeaderNav from "@/components/layout/header-nav/HeaderNav";

export const metadata: Metadata = {
  title: "Funiro Landing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <HeaderNav/>
        {children}
      </body>
    </html>
  );
}
