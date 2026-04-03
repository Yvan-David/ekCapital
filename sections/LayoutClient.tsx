'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideHeaderRoutes = ['/contact'];

  return (
    <>
      {!hideHeaderRoutes.includes(pathname) && <Header />}
      {children}
      <Footer />
    </>
  );
}
