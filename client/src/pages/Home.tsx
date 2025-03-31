import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Transformations from '@/components/Transformations';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import DecorativeLeaf from '@/components/DecorativeLeaf';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Decorative Leaves */}
      <DecorativeLeaf position="top-20 left-10" />
      <DecorativeLeaf position="top-60 right-20" size={30} />
      
      <Navbar />
      <Hero />
      <Transformations />
      <HowItWorks />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
