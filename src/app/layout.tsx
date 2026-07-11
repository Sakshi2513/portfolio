import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakshi Sheogekar — AI/ML Engineer & Data Scientist",
  description: "Final-year CSE (Data Science) engineer building AI systems that turn raw data and unstructured reports into decisions — SIH 2025 National Finalist recognized by the Ministry of Mines.",
  openGraph: {
    images: [{ url: '/assets/PHOTO.jpeg' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <BackgroundAnimation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
