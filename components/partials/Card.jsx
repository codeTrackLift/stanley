import { motion } from 'framer-motion';

const cardStyle = {
  transition:'all 0.5s ease-in-out',
  width: '18rem', 
  height:'25rem', 
  transform:'scale(0.8)'
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
        <a href={link} className="btn btn-primary">{button}</a>
      </div>
    </motion.div>
  )
}