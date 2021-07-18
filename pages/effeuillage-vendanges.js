import MainLayout from '../components/MainLayout';
import Header from '../components/Header';
import EffeuillageVendange from '../components/EffeuillageVendange';

export default function Home({}) {
  return (
    <MainLayout>
      <Header />
      <EffeuillageVendange />
    </MainLayout>
  );
}
