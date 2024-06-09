"use client";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/TopNavbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Provider } from "react-redux";
import store from "@/redux/store";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

console.log({
  a: process.env.API_URL,
  b: process.env,
});

// export const metadata: Metadata = {
//   title: "Vipul Waghmare",
//   description: "Portfolio App of Vipul Waghmare",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
