import { motion } from "framer-motion"

const buttonCtaStyle = {
  marginTop: '-5rem',
  marginBottom: '8rem',
  fontSize: '1.5rem',
  borderRadius: '100vw',
  padding: '0.5rem 1rem',
  background: 'skyblue',
  border: '2px solid skyblue',
  color: 'white',
}

export default function ButtonCta() {

  return (
    <motion.div
      whileInView={{ translateY: -90 }}
      transition={{ type: 'spring', stiffness: 1000, delay: 0.5 }}
    >
      <button 
        className={`boxShadow`} 
        style={buttonCtaStyle}
      >
        Contact Us!
      </button>
    </motion.div>
  )
}