import Image from 'next/image';
import Card from '../components/partials/Card';
import hvacRepair from '../images/hvacRepair.webp';
import satisfactionLogo from '../images/satisfactionLogo.png';
import licensedLogo from '../images/licensedLogo.gif';

export default function CardSection() {
  return (
    <section className="text-center container">
    <div className='row gap-5'>
      <Card 
        header={
          <iframe 
            className='ratio' 
            src="https://youtube.com/embed/GYxXpk08HBA" 
            frameBorder="0" 
            allowFullScreen 
            title='MIT xCHANGE bootcamp project video' 
          />
        }
        title={'HVAC Service'}
        description={'We provide expert HVAC solutions that fit your heating and cooling needs.  We provide a full consultation to explain all of the available options.'}
      />
      <Card 
        header={
          <Image 
            src={hvacRepair}
            alt='HVAC repair technician'
            className='img-fluid'
            width={300}
          />
        }
        title={'HVAC Service'}
        description={'We provide emergency and maintenance service.  We are available for all your HVAC needs.'}
      />
      <Card 
        header={
          <div className='row'>
            <Image 
              src={satisfactionLogo}
              alt='Licensed insured bonded'
              className='img-fluid col-6'
              width={125}
              height={125}
              />
            <Image 
              src={licensedLogo}
              alt='Licensed insured bonded'
              className='img-fluid col-6'
              width={125}
              height={100}
            />
          </div>
        }
        title={'Satisfaction Guaranteed'}
        description={'We serve residential and commercial clients, offering a varienty of money-saving solutions.  We use only the highest quality partys and equipment.'}
      />
    </div>

  </section>
  )
}