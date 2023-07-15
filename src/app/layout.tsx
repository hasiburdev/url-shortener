import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Url Shortener",
  description: "A one stop solution for url shortening...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen max-w-3xl mx-auto  flex flex-col items-center justify-start gap-12 p-6">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
