import { motion } from 'framer-motion';

const cardStyle = {
  height:'37rem', 
  width: '18rem', 
  background: 'aliceblue',
  transition:'all 0.5s ease-in-out',
  transform:'scale(0.8)',
}

export default function Card({header, title, description}) {
return (
    <motion.div 
      whileInView={{ scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="card col-sm-4 mx-auto boxShadow" 
      style={cardStyle}
    >
      <div className="card-body pt-4">
        {header}
        <h5 className="card-title py-3">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </motion.div>
  )
}