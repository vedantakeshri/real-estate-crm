import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
          <section className="bg-gradient-to-b from-blue-50 to-white text-center py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Close More Deals with a Smarter Real Estate CRM
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Manage leads, track follow-ups, and organize your entire property inventory in one place. Built for builders, brokers, and real estate agencies.
        </p>
        <Link href="/signup">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Start Free Trial
          </button>
        </Link>
      </section>

    </>
  )
}

export default Hero