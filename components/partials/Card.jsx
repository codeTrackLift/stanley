import Image from 'next/image';

export default function Card({header, title, description, link, button}) {
return (
  <div className="card col-sm-4 mx-auto" style={{width: '18rem'}}>
    <div className="card-body">
      {header}
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={link} className="btn btn-primary">{button}</a>
    </div>
  </div>
  )
}