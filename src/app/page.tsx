
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ScrollCard from "@/components/ScrollCard";
import CardsHover from "@/components/CardsHover";
import LampEffect from "@/components/LampEffect";
import MultiProfiles from "@/components/MultiProfiles";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <HeroSection/>
       <FeaturedSection/>
       <WhyChooseUs/>
       <ScrollCard/>
       <CardsHover/>
       <LampEffect/>
       <MultiProfiles/>
       <Footer/>
    </main>
  );
}
