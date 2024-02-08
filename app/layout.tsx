import type { Metadata } from 'next';
import '@/services/styling/globals.css';
import NavBar from '@/components/navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        <main className="px-8 py-20  mx-auto">
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
