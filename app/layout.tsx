// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { BookmarkProvider } from "@/context/BookmarkContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github-user-explorer-6p7j.vercel.app"),
  title: "GitHub User Explorer",
  description: "Search any GitHub user and explore their repositories",
  openGraph: { images: [{ url: "/og-image.png" }] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-slate-50 text-slate-900 min-h-screen antialiased flex flex-col">
        <BookmarkProvider>
          <Navbar />
          <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
            {children}
          </main>
          <Footer />
        </BookmarkProvider>
      </body>
    </html>
  );
}
