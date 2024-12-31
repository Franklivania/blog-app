import { Inter } from "next/font/google";
import Navbar from "@/layout/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chibuzo's Blog",
  description: "A place where I write stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex ${inter.className}`}>
        <main className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-y-6">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
