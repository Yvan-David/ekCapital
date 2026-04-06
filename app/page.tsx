"use client"
import { Ticker } from '@/components/ui/ticker';
import { Certification } from '@/sections/Certification';
import { Corporate } from '@/sections/Corporate';
import { FinalCTA } from '@/sections/FinalCta';
import { FrameworkSection } from '@/sections/FrameworkSection';
import { Hero } from '@/sections/Hero';
import { PathSelector } from '@/sections/pathSelector';
import { Payment } from '@/sections/Payment';
import { Resources } from '@/sections/Resources';
import { SolutionsGrid } from '@/sections/Solutiongrid';
import { Testimonials } from '@/sections/Testimonials';
import { Urgency } from '@/sections/Urgency';
import { USP } from '@/sections/Usp';
import { WhatsAppFlow } from '@/sections/whatsappFlow';

export default function Page() {
  return <>
    <Ticker />
    <Hero />
    <PathSelector />
    <SolutionsGrid />
    <FrameworkSection />
    <Corporate />
    <USP />
    <Testimonials />
    <Resources />
    <FinalCTA />
  </>
}