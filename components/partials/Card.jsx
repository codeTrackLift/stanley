import { motion } from 'framer-motion';

export default function Card({header, title, description, link, button}) {
return (
  <motion.div
    className='col-sm-4 mx-auto'
    whileInView={{ scale: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
  >
    <div className="card boxShadow mt-3" style={{width: '18rem', height:'25rem', transform:'scale(0.9)'}}>
      <div className="card-body">
        {header}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">{button}</a>
      </div>
    </div>
  </motion.div>
  )
}