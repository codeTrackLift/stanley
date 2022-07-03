import React, { useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/partials/Card';
import hvacRepair from '../images/hvacRepair.webp';
import satisfactionLogo from '../images/satisfactionLogo.png';
import licensedLogo from '../images/licensedLogo.gif';

export default function Home() {

  useEffect(() => {
      if (typeof document !== undefined) {
        let bootstrap = require('bootstrap/dist/js/bootstrap')
      }
  }, [])

  return (
    <div>
      <Head>
        <title>Standley Cooling Corp</title>
        <meta name="description" content="Stanley Cooling, expert air conditioning technicians providing service in Florida." />
      </Head>

      <main>
        <section className="py-5 text-center container">
          <div className='row'>
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
              link={'#'}
              button={'Learn More'}
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
              link={'#'}
              button={'Learn More'}
            />
            <Card 
              header={
                <Image 
                  src={licensedLogo}
                  alt='Licensed insured bonded'
                  className='img-fluid'
                  width={300}
                  height={100}
                />
              }
              title={'HVAC Service'}
              description={'We provide emergency and maintenance service.  We are available for all your HVAC needs.'}
              link={'#'}
              button={'Learn More'}
            />
          </div>

        </section>
      </main>

    </div>
  )
}