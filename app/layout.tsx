import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AAP - ضمان يسندك | خدمات الحماية القانونية",
  description:
    "AAP كيان سعودي مُسجّل يقدم خدمات الحماية القانونية والاستشارات. نوفر لك سند وحماية في مواجهة التحديات القانونية والإدارية.",
  keywords: [
    "حماية قانونية",
    "استشارات قانونية",
    "خدمات قانونية",
    "السعودية",
    "AAP",
    "حقوق المستهلك",
  ],
  authors: [{ name: "AAP Services" }],
  openGraph: {
    title: "AAP - ضمان يسندك",
    description: "خدمات الحماية القانونية والاستشارات في المملكة العربية السعودية",
    locale: "ar_SA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
