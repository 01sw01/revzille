import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import DashboardPreview from "@/components/dashboard-preview";
import SupportSection from "@/components/support-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <DashboardPreview />
      <SupportSection />
      <CTASection />
      <Footer />
    </div>
  );
}
