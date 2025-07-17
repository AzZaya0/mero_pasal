import {Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar/page";
import Footer from "./footer";

const inter= Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mero Pasal",
  description: "Ecom app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>

      <body >
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
