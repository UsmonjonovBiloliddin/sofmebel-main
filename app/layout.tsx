import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sof Mebel | Premium mebel showroom',
  description: 'Sof Mebel bilan uyingiz uchun zamonaviy va sifatli mebellarni kashf eting.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
