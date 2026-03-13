import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { SocialSidebar } from "@/components/SocialSidebar";
import { EmailSidebar } from "@/components/EmailSidebar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Franz Khyl Ong | Software Engineer",
  description: "Franz Khyl Ong is a software engineer who builds reliable backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased min-h-screen bg-navy text-slate font-sans selection:bg-navy-lightest selection:text-slate-lightest relative`}
        suppressHydrationWarning
      >
        <Header />

        <SocialSidebar />
        <EmailSidebar />

        <main className="mx-auto min-h-screen max-w-[1600px] px-6 sm:px-12 md:px-24 lg:px-[150px]">
          {children}
        </main>
      </body>
    </html>
  );
}
