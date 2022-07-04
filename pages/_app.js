import "bootstrap/dist/css/bootstrap.css";
import "../styles/application.scss";
import Head from "next/head";
import { motion } from 'framer-motion';
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
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Hero />
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 1.25 }}
        >
        <Component {...pageProps} />
        <Footer />
        </motion.div>
      </motion.div>
    </>
  );
}

export default MyApp;
