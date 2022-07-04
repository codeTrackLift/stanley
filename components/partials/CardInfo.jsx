import { motion } from 'framer-motion';

const cardStyle = {
  height:'10rem', 
  width: '18rem', 
  background: '#B3D4F6',
  transition:'all 0.5s ease-in-out',
  transform:'scale(0.8)',
}

export default function Card({title, description}) {
return (
    <motion.div 
      whileInView={{ scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="card col-sm-4 mx-auto boxShadow mt-5" 
      style={cardStyle}
    >
      <div className="card-body pt-4">
        <h5 className="card-title py-3">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </motion.div>
  )
}