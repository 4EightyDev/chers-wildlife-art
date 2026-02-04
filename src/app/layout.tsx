import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cher's Wildlife Art | The Spirit of the Wild",
  description: "Bespoke wildlife art and conservation stories by Cher.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        <Header />
        {/* Padding-top ensures content doesn't hide under the fixed header */}
        <main className="px-6 lg:px-12 max-w-[1800px] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
