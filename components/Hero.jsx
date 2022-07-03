import Image from 'next/image';
import { motion } from 'framer-motion';
import ButtonCta from './partials/ButtonCta';
import hero from '../images/heroBeach.jpg';
import styles from '../styles/Hero.module.scss'

export default function Hero() {

  return (
    <header>
      <Image 
        src={hero}
        alt='beach landscape'
        height='450'
        width='1200'
        layout='responsive'
        priority
      />
      <div className={`text-center`}>
        <motion.div
          animate={{ translateY: -80 }}
          transition={{ delay: 0.25, duration: 0.25 }}
        >
          <h1 className={`${styles.h1}`}>On-call HVAC to help you get cozy</h1>
          <h2 className={`${styles.h2}`}>555-555-5555</h2>
        </motion.div>
        <ButtonCta className='title' />
      </div>
    </header>
  )
}