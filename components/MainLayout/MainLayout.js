import Head from 'next/head';

export default function MainLayout({ children }) {
  return (
    <div className={'mainContainer'}>
      <Head>
        <title>GM-VITIAGRI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Entreprise Sas GM Viti-agri spécialisée dans le domaine des Travaux et Services viticoles depuis 2016."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
