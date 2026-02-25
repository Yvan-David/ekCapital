"use client"
import { AboutSection } from '@/sections/AboutSection';
import { CTASection } from '@/sections/CTASection';
import { Hero } from '@/sections/Hero';
import { PartnerLogos } from '@/sections/PartnerLogos';
import ServicesSection from '@/sections/ServicesSection';
import { Testimonials } from '@/sections/Testimonials';
import TrainingSection from '@/sections/TrainingSection'

export default function Page(){
  return <>
        <Hero />
        <TrainingSection />
      <ServicesSection />
      <AboutSection />
      <PartnerLogos />
      {/* <Testimonials /> */}
      <CTASection />
  </>
}