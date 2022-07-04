import Image from 'next/image';
import { motion } from 'framer-motion';
import ButtonCta from './partials/ButtonCta';
import hero from '../images/heroBeach.jpg';
import styles from '../styles/Hero.module.scss'

const h3Style = {
  position: 'relative',
  zIndex: 10,
  height: 0,
  letterSpacing: 1.5,
}

export default function Hero() {

  return (
    <header className={`${styles.header} text-center`}>
      <div style={h3Style}>
        <h5 className={`${styles.h5} fw-normal pt-2`}>CONTACT US FOR A FREE QUOTE!</h5>
      </div>
      <Image 
        src={hero}
        alt='beach landscape'
        height='600'
        width='1200'
        layout='responsive'
        priority
      />
      <motion.div
        animate={{ translateY: -80 }}
        transition={{ delay: 0.25, duration: 0.25 }}
      >
        <h1 className={`${styles.h1}`}>On-call HVAC to help you get cozy</h1>
        <h2 className={`${styles.h2} text-end px-5`}>555-555-5555</h2>
      </motion.div>
      <ButtonCta />
    </header>
  )
}