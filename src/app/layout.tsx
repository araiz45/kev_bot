import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

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
        <script src="js/app.bundle.js"></script>
        <script src="js/charts.bundle.js"></script>
        <script src="js/countdown.bundle.js"></script>
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
      </body>
    </html>
  );
}
