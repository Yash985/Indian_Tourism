import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Indian Tourism",
  description: "Explore the hidden gems of India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`antialiased`}>
      <Providers>
          {children}
          <Footer />
      </Providers>
        </body>
    </html>
  );
}
