import { motion } from "framer-motion"

const buttonCtaStyle = {
  marginTop: '-5rem',
  marginBottom: '8rem',
  fontSize: '1rem',
  borderRadius: '100vw',
  padding: '1rem 2rem',
  background: 'skyblue',
  border: '2px solid skyblue',
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