import Image from 'next/image';
import CarrierUnit from '../../images/carrierUnit.webp'
import hvacMeter from '../../images/hvacMeter.webp'
import hvacTech from '../../images/hvacTech.webp'
import whiteVans from '../../images/whiteVans.webp'
import styles from '../../styles/scroll.module.scss'

export default function ScrollContainer() {

  return (
    <div id='scrollContainer' className={styles.scrollContainer}>
      <Image className={styles.image} src={whiteVans} alt='HVAC technicians coming out of white vans' />
      <Image className={styles.image} src={CarrierUnit} alt='Carrier HVAC unit' />
      <Image className={styles.image} src={hvacTech} alt='HVAC technician working' />
      <Image className={styles.image} src={hvacMeter} alt='HVAC technician using a meter' />
    </div>
  )
}