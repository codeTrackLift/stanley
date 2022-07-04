import React, { useEffect } from "react";
import Head from 'next/head'
import ScrollContainer from '../components/partials/ScrollContainer'
import Filler from '../components/Filler'
import Info from '../components/Info'

export default function Contact() {

  useEffect(() => {
      if (typeof document !== undefined) {
        let bootstrap = require('bootstrap/dist/js/bootstrap')
      }
  }, [])

  return (
    <div>
      <Head>
        <title>Contact | Standley Cooling</title>
        <meta name="description" content="Stanley Cooling, expert air conditioning technicians providing service in Florida." />
      </Head>

      <main>
        <section className="py-5 text-center container">
          <h2>Contact</h2>
        </section>
      </main>
      
      <Filler />
      <ScrollContainer />
      <Info />

    </div>
  )
}