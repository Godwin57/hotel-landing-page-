import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twinny Hotel & Suites | Experience Refined Luxury",
  description:
    "Ideally located in Ejigbo, Lagos, offering sophisticated accommodations for business and leisure travelers looking for comfort close to the airport.",
  keywords: ["hotel", "Lagos", "Ejigbo", "shortlet", "luxury", "accommodation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
