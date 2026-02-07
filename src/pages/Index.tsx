import Navbar from "@/components/school/Navbar";
import HeroSlideshow from "@/components/school/HeroSlideshow";
import WelcomeSection from "@/components/school/WelcomeSection";
import WhyChooseUs from "@/components/school/WhyChooseUs";
import QuickFacts from "@/components/school/QuickFacts";
import AcademicPrograms from "@/components/school/AcademicPrograms";
import LatestNews from "@/components/school/LatestNews";
import ContactSection from "@/components/school/ContactSection";
import Footer from "@/components/school/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSlideshow />
        <WelcomeSection />
        <WhyChooseUs />
        <QuickFacts />
        <AcademicPrograms />
        <LatestNews />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
