import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raghav Pareek Portfolio",
  description: "A high-end creative developer portfolio.",
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "ka5wMXgGek-DggHHISGBxpn6z8Eas2Y1fE57nPTTeVg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
