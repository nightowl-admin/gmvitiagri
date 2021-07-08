import MainLayout from '../components/MainLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import Prestation from '../components/Prestation';
import Check from '../components/Check';
import Header from '../components/Header';

export default function Home({}) {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Prestation />
      <Check />
      <Header />
    </MainLayout>
  );
}
