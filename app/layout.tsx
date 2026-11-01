import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "./fonts/anton.woff2",
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const body = localFont({
  src: "./fonts/instrument-sans.woff2",
  variable: "--font-body",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EXOH — Tony-onuoha Munachiso Osaretin",
  description:
    "Mechatronics Engineering student, technology enthusiast and creator of PrepUNIBEN.",
  metadataBase: new URL("https://aboutexoh.vercel.app"),
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
