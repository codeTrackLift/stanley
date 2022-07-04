import "bootstrap/dist/css/bootstrap.css";
import "../styles/application.scss";
import Head from "next/head";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <Hero />

      <Component {...pageProps} />

      <Footer />

    </>
  );
}

export default MyApp;
