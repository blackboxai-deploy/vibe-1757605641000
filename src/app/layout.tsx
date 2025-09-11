import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "Professional Resume - ATS Optimized",
  description: "Modern, ATS-friendly resume template designed to pass applicant tracking systems and impress hiring managers.",
  keywords: "resume, CV, ATS optimized, professional, career, job application, hiring",
  authors: [{ name: "Professional Resume Builder" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${roboto.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}