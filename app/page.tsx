"use client"
import { Ticker } from '@/components/ui/ticker';
import { AboutSection } from '@/sections/AboutSection';
import { Certification } from '@/sections/Certification';
import { Corporate } from '@/sections/Corporate';
import { CTASection } from '@/sections/CTASection';
import { FinalCTA } from '@/sections/FinalCta';
import { FrameworkSection } from '@/sections/FrameworkSection';
import { Hero } from '@/sections/Hero';
import { PartnerLogos } from '@/sections/PartnerLogos';
import { PathSelector } from '@/sections/pathSelector';
import { Payment } from '@/sections/Payment';
import { Resources } from '@/sections/Resources';
import ServicesSection from '@/sections/ServicesSection';
import { SolutionsGrid } from '@/sections/Solutiongrid';
import { Testimonials } from '@/sections/Testimonials';
import { Urgency } from '@/sections/Urgency';
import { USP } from '@/sections/Usp';
import { WhatsAppFlow } from '@/sections/whatsappFlow';

export default function Page() {
  return <>
  <Ticker/>
    <Hero />
    <PathSelector />
    <SolutionsGrid />
    {/* <AboutSection />
    <PartnerLogos /> */}
    <FrameworkSection/>
    <Corporate/>
    <USP/>
    <WhatsAppFlow/>
    <Testimonials/>
    <Certification/>
    <Payment/>
    <Resources/>
    <FinalCTA/>
    <Urgency/>
    {/* <Testimonials /> */}
    {/* <CTASection /> */}
  </>
}