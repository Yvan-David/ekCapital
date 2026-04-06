import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
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
        <LayoutClient>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        </LayoutClient>
      </body>
    </html >
  );
}
