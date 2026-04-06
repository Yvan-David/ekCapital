'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Ticker } from '@/components/ui/ticker';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isHomepage = pathname === '/';
  const hideHeaderRoutes = ['/contact'];

  return (
    <>
      {!isHomepage && !hideHeaderRoutes.includes(pathname) && <Header />}
        {children}
      <Footer />
    </>
  );
}