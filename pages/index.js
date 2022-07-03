import React, { useEffect } from "react";
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {

  useEffect(() => {
      if (typeof document !== undefined) {
        let bootstrap = require('bootstrap/dist/js/bootstrap')
      }
  }, [])

  return (
    <div>
      <Head>
        <title>Standley Cooling</title>
        <meta name="description" content="Stanley Cooling, expert air conditioning technicians providing service in Florida." />
      </Head>

      <Navbar />

      <main>
        <section className="py-5 text-center container">
          <h2>Home</h2>
        </section>
      </main>

    </div>
  )
}