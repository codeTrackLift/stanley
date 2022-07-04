import Image from 'next/image';
import Card from '../components/partials/CardStaff';
import employeeNum1 from '../images/employeeNum1.webp';
import theBoss from '../images/theBoss.webp';

export default function Employees() {
  return (
    <section className="text-center container">
    <div className='row gap-5'>
      <Card 
        header={
          <Image 
            src={employeeNum1}
            alt='Employee photo'
            className='img-fluid'
            width={300}
            height={400}
          />
        }
        title={'Patrick, Technician'}
        description={'Patrick has over 5 years of experience in the HVAC industry and is detail orient. You can count on him to be setting up all of your equipment.'}
      />
      <Card 
        header={
          <div className='row'>
            <Image 
              src={theBoss}
              alt='Licensed insured bonded'
              className='img-fluid'
              width={300}
              height={400}
              />
          </div>
        }
        title={'Stanley, Founder'}
        description={'Stanley started Stanley Cooling in 2017 and is committed to bringing comfort to our community to keep everyone cozy in their own home in Sunshine Florida.'}
      />
    </div>

  </section>
  )
}