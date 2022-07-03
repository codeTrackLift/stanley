import React, { useEffect } from "react";
import Head from 'next/head'

export default function Services() {

  useEffect(() => {
      if (typeof document !== undefined) {
        let bootstrap = require('bootstrap/dist/js/bootstrap')
      }
  }, [])

  return (
    <div>
      <Head>
        <title>Services | Standley Cooling</title>
        <meta name="description" content="Stanley Cooling, expert air conditioning technicians providing service in Florida." />
      </Head>

      <main>
        <section className="py-5 text-center container">
          <h2>Services</h2>
        </section>
      </main>

    </div>
  )
}