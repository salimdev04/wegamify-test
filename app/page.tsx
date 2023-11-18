

import AdvSection from "@/components/AdvSection";
import DiscoverSection from "@/components/DiscoverSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main >
      <Navbar />
      <HeroSection />
      <AdvSection />
      <DiscoverSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
