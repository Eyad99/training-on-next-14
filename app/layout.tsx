import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SessionWrapper from "@/components/session-wrapper";
import Header from "@/components/widgets/header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next 14",
  description: "Treaning on Next 14",
  keywords:
    "next, starter, typescript, tailwind css, prettier, eslint, seo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          <link rel="icon" href="/next.svg" sizes="any" />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <section className="flex-1  px-4 md:px-6">{children}</section>
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
