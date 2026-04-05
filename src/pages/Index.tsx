import { useState, useCallback } from "react";
import Navbar from "@/components/wedding/Navbar";
import HeroSection from "@/components/wedding/HeroSection";
import WelcomeSection from "@/components/wedding/WelcomeSection";
import DetailsSection from "@/components/wedding/DetailsSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import EventScheduleSection from "@/components/wedding/EventScheduleSection";
import GallerySection from "@/components/wedding/GallerySection";
import RSVPSection from "@/components/wedding/RSVPSection";
import LocationSection from "@/components/wedding/LocationSection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import GiftSection from "@/components/wedding/GiftSection";
import ContactSection from "@/components/wedding/ContactSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = useCallback(() => {
    setIsMusicPlaying((prev) => !prev);
    // Music audio element can be added here when a track is available
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} />
      <HeroSection />
      <WelcomeSection />
      <DetailsSection />
      <CountdownSection />
      <LoveStorySection />
      <EventScheduleSection />
      <GallerySection />
      <RSVPSection />
      <LocationSection />
      <DressCodeSection />
      <GiftSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
