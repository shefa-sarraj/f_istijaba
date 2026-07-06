import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks';
import Initiatives from '../components/Initiatives';
import Footer from '../components/Footer';




function Home() {
  return (
    <div style={{  backgroundColor: "#384c81", color: '#ffffff' }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <Initiatives />
      <Footer />
    </div>
  );
}

export default Home;