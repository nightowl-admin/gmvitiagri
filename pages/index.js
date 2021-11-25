import MainLayout from '../components/MainLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import Prestation from '../components/Prestation';
import Check from '../components/Check';
import Footer from '../components/Footer';

export default function Home({}) {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Prestation />
      <Check />
      <Footer />
    </MainLayout>
  );
}
