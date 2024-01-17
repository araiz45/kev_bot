import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Script from "next/script";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KBCOM - Agence Web basée à tours",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr" className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={
          inter.className +
          " overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900"
        }
        itemScope
        itemType="http://schema.org/WebPage"
      >
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
        <Footer />
        <Script src="js/app.bundle.js"></Script>
        <Script src="js/charts.bundle.js"></Script>
        <Script src="js/countdown.bundle.js"></Script>
      </body>
    </html>
  );
}
