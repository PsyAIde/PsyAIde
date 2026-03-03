import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "PsyAIde | Clinical Reasoning Infrastructure for Psychiatry",
    description: "Transforming fragmented psychiatric notes into structured, longitudinal diagnostic intelligence. Built for clinicians, powered by evidence-based AI.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <TooltipProvider>
                    <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <main className="flex-1 pt-20">{children}</main>
                        <Footer />
                    </div>
                    <Toaster />
                    <Sonner />
                </TooltipProvider>
            </body>
        </html>
    );
}
