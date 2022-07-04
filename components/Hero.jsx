import Image from 'next/image';
import ButtonCta from './partials/ButtonCta';
import hero from '../images/heroBeach.jpg';
import styles from '../styles/Hero.module.scss'

export default function Hero() {

  return (
    <header className={`${styles.header} text-center`}>
      <div className={`${styles.top}`}>
        <h5 className={`${styles.h5} fw-normal pt-1`}>CONTACT US FOR A FREE QUOTE!</h5>
      </div>
      <div className={`${styles.gray}`}>
      </div>
      <div className={`${styles.greeting}`}>
        <h1 className={`${styles.h1}`}>On-call HVAC to help you get cozy</h1>
        <h2 className={`${styles.h2} text-end px-5`}>555-555-5555</h2>
      </div>
      <div className={`${styles.button}`}>
        <ButtonCta />
      </div>
    </header>
  )
}