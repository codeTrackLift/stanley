import { motion } from "framer-motion"

const buttonCtaStyle = {
  fontSize: '1rem',
  borderRadius: '100vw',
  padding: '1rem 2rem',
  background: 'var(--blue)',
  border: '2px solid var(--blue)',
  color: 'black',
  letterSpacing: '1.5px',
}

export default function ButtonCta() {

  return (
    <motion.div
      whileInView={{ translateY: -90, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 1000, duration: 1, delay: 0.5 }}
      initial={{ opacity: 0 }}
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