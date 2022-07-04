import React, { useEffect } from "react";
import Head from 'next/head';
import CardSection from '../components/CardSection';
import Employees from '../components/Employees';
import Info from '../components/Info';
import ScrollContainer from '../components/partials/ScrollContainer';

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

        <CardSection />

        <ScrollContainer />

        <h4 className='mx-4 px-4 pb-4'>Our Team</h4>

        <Employees />

        <h4 className='mx-4 px-4 pt-5'>Office Information</h4>

        <Info />

      </main>

    </div>
  )
}