import "bootstrap/dist/css/bootstrap.css";
import "../styles/application.scss";
import Head from "next/head";
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <Hero />

      <Component {...pageProps} />

      <Footer />

    </motion.div>
  );
}

export default MyApp;
