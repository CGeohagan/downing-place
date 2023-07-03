import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name='description' content='Downing Place HOA' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Downing Place</title>
      </Head>
      <Header />
      <main className='flex flex-col items-center justify-center w-full py-8 md:py-12 px-6'>
        {children}
      </main>
      <Footer />
    </>
  );
}
