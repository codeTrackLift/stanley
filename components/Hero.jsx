import Image from 'next/image';
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
        <h1 className={`${styles.h1}`}>On-call HVAC to help you get cozy</h1>
      </div>
    </header>
  )
}