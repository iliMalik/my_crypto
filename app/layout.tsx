import type { Metadata } from 'next';
import '@/services/styling/globals.css';
import NavBar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'IlyasMalik',
  description: 'Crypo reviews, blockchains programming and coins news',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="px-8 py-20  mx-auto">{children}</main>
      </body>
    </html>
  );
}
