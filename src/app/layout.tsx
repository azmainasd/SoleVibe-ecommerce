import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Solevibe",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/icons/logo2.svg" type="image/x-icon"/>
            </head>
            <body className={inter.className}>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}