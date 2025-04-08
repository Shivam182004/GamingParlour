import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import GamingOptionsSection from "@/components/GamingOptionsSection";
import PremiumExperienceSection from "@/components/PremiumExperienceSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <NavigationBar />
      <main>
        <HeroSection />
        <GamingOptionsSection />
        <PremiumExperienceSection />
        <PricingSection />
        <GallerySection />
        <ContactSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
