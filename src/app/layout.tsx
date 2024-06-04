import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A blog app",
  description: "Blogging about all current affairs and hobbies",
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
