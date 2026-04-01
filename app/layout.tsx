import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "@/sections/LayoutClient";

export const metadata: Metadata = {
  title: "EK CAPITAL GROUP",
  description: "A consulting firm for Corporates and SMEs in Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
