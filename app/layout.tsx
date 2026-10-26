import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "REXX — Energy, Reimagined.",
  description:
    "A different approach to energy. Explore REXX caffeine pouches, our flavours and our story.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
