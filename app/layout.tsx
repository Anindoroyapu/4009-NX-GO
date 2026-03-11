import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import LayoutProvider from "@/context/LayoutProvider";
import Footer from "@/modules/shared/footer/Footer";
import Header from "@/modules/shared/header/Header";
import ComposeProviders from "@/src/context/ComposeProviders";
import TemplateProvider from "@/src/context/template/TemplateProvider";
import { InitProvider } from "@/src/context/InitProvider";
import ScrollToTop from "@/src/libs/ScrollToTop";

const shurjo = localFont({
  src: [
    {
      path: "../public/fonts/Shurjo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ShurjoWeb_700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-shurjo",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "GO",
  description: "A template platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${shurjo.variable} antialiased font-body`}>
        <ComposeProviders
          components={[
            TemplateProvider,
            InitProvider,
            // AuthProvider,
            LayoutProvider,
          ]}
        >
          <ScrollToTop />
          <Header />
          <div className=" pt-16 lg:pt-19.75  h-full">{children}</div>
          <Footer />
        </ComposeProviders>
      </body>
    </html>
  );
}
