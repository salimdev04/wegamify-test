

import AdvSection from "@/components/AdvSection";
import DiscoverSection from "@/components/DiscoverSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { hiddenOnMobile } from "@/utils/styles";
import commonStyles from "@/components/CommonStyles.module.css"

export default function Home() {
  return (
    <main >
      <Navbar />
      <div className={commonStyles.hiddenOnMobile}>
        <HeroSection />
      </div>
      <AdvSection />
      <DiscoverSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
