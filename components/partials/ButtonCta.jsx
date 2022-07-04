import { motion } from "framer-motion"

const buttonCtaStyle = {
  fontSize: '1rem',
  borderRadius: '100vw',
  padding: '1rem 2rem',
  background: '#B3D4F6',
  border: '2px solid #B3D4F6',
  color: 'black',
  letterSpacing: '1.5px',
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
        GET A FREE QUOTE
      </button>
    </motion.div>
  )
}