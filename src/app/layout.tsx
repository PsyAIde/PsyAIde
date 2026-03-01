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
    title: "PsyAIde - Structured Intelligence for Mental Health",
    description: "Building the AI infrastructure layer for psychiatric diagnostic reasoning.",
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
                        <main className="flex-1 pt-16">{children}</main>
                        <Footer />
                    </div>
                    <Toaster />
                    <Sonner />
                </TooltipProvider>
            </body>
        </html>
    );
}
