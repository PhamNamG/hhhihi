import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/Teamplates/Header";
import Footer from "@/components/Footer";
import React from "react";
import StoreProvider from "../providers/StoreProvider";
import PagesTopLoader from "../components/Loading/pageLoading";
import ReactQueryProvider from "../providers/QueryClientProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { defaultMetadata } from "@/config";

const inter = Roboto({ subsets: ["latin", "vietnamese"], weight: "300" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className + " bg-[#23232a]"} >
        <PagesTopLoader />
        <StoreProvider>
          <ReactQueryProvider>
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
            <ToastContainer />
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
