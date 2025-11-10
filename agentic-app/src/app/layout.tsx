import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Influenceur IA",
  description: "Portrait photo généré d'un influenceur virtuel."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
