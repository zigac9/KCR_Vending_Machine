import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Topbar from "./components/topbar";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KČR - Kavomat",
  description: "Redesign kavomata pri predmetu KČR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        > */}
        <main className="fixed, h-[1184px] w-[825px] bg-coffe-300 dark:bg-coffe2-300 m-auto flex flex-col">
        <Topbar/>
        <div className="flex-1">{children}</div>
        <Footer/>
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
