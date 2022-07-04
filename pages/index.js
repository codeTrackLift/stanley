import React, { useEffect } from "react";
import Head from 'next/head';
import CardSection from '../components/CardSection';
import Employees from '../components/Employees';
import Info from '../components/Info';
import ScrollContainer from '../components/partials/ScrollContainer';

const h4Style ={
  fontFamily: `'Oswald-Light', sans-serif`,
}

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

        <h4 className='mx-4 px-4 pb-4' style={h4Style}>Our Team</h4>

        <Employees />

        <Info />

      </main>

    </div>
  )
}