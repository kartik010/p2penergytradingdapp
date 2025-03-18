import Navbar from "@/app/components/navbar/Navbar";
import HeroSection from "@/app/components/herosection/HeroSection";
import FeatureCards from "@/app/components/fearturescard/FeatureCards";
import FeaturesSection from "@/app/components/features/FeaturesSection";
import Installation from "@/app/components/Installationsetup/Installationsetup";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <FeaturesSection />
      <Installation />
    </>
  );
}