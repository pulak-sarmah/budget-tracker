import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProviders from "@/components/providers/ThemeProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget tracker",
  description:
    "Track your spending, manage your budget, and take control of your finances with our easy-to-use budget tracker app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
    >
      <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
        <body className={inter.className}>
          <ThemeProviders>{children}</ThemeProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
