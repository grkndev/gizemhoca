import "./globals.css";
import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dancing_script = Dancing_Script({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gizem Hocammmm",
  description: "Tarihin en iyisi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancing_script.className}`}>{children}</body>
    </html>
  );
}
