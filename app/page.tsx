"use client"
import { AboutSection } from '@/sections/AboutSection';
import { CTASection } from '@/sections/CTASection';
import { Hero } from '@/sections/Hero';
import { PartnerLogos } from '@/sections/PartnerLogos';
import { Services } from '@/sections/Services';
import { Testimonials } from '@/sections/Testimonials';

export default function Page(){
  return <>
        <Hero />
      <Services />
      <AboutSection />
      <PartnerLogos />
      <Testimonials />
      <CTASection />
  </>
}