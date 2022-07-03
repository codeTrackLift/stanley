import { motion } from 'framer-motion';

const cardStyle = {
  height:'25rem', 
  width: '18rem', 
  background: 'aliceblue',
  transition:'all 0.5s ease-in-out',
  transform:'scale(0.8)',
}

const btnStyle = {
  background: 'skyblue',
  border: '1px solid skyblue',
  borderRadius: '100vw',
}

export default function Card({header, title, description, link, button}) {
return (
    <motion.div 
      whileInView={{ scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="card col-sm-4 mx-auto boxShadow mt-5" 
      style={cardStyle}
    >
      <div className="card-body">
        {header}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary" style={btnStyle}>{button}</a>
      </div>
    </motion.div>
  )
}