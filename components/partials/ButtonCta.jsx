import { motion } from "framer-motion"

const buttonCtaStyle = {
  borderRadius: '100vw',
  padding: '0.25rem 0.5rem',
  background: 'skyblue',
  border: '2px solid skyblue',
  color: 'white',
}

export default function ButtonCta() {

  return (
    <motion.div
      whileInView={{ translateY: -25 }}
      transition={{ type: 'spring', stiffness: 1000, delay: 0.5 }}
    >
      <button 
        id='buttonCta'
        className={`boxShadow`} 
        style={buttonCtaStyle}
      >
        Contact Us!
      </button>
    </motion.div>
  )
}