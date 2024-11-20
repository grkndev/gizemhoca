import "./globals.css";
import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dancing_script = Dancing_Script({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gizem Hocammmm | Amirim o7",
  description: "Tarihin en iyisi",
  themeColor: "#D397A2",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://amirim.grkn.dev",
    siteName: "Gizem Hocam",
    images: [
      {
        url: "https://amirim.grkn.dev/base.jpeg",
        width: 800,
        height: 800,
        alt: "Gizem Hocam",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} ${dancing_script.className}`}>{children}</body>
    </html>
  );
}
