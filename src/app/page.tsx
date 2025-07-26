// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
// //       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
// //         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
// //           Get started by editing&nbsp;
// //           <code className="font-mono font-bold">src/app/page.tsx</code>
// //         </p>
// //         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
// //           <a
// //             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
// //             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             By{" "}
// //             <Image
// //               src="/vercel.svg"
// //               alt="Vercel Logo"
// //               className="dark:invert"
// //               width={100}
// //               height={24}
// //               priority
// //             />
// //           </a>
// //         </div>
// //       </div>

// //       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
// //         <Image
// //           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
// //           src="/next.svg"
// //           alt="Next.js Logo"
// //           width={180}
// //           height={37}
// //           priority
// //         />
// //       </div>

// //       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
// //         <a
// //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Docs{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Find in-depth information about Next.js features and API.
// //           </p>
// //         </a>

// //         <a
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Learn{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Learn about Next.js in an interactive course with&nbsp;quizzes!
// //           </p>
// //         </a>

// //         <a
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Templates{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Explore starter templates for Next.js.
// //           </p>
// //         </a>

// //         <a
// //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 className={`mb-3 text-2xl font-semibold`}>
// //             Deploy{" "}
// //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
// //             Instantly deploy your Next.js site to a shareable URL with Vercel.
// //           </p>
// //         </a>
// //       </div>
// //     </main>
// //   );
// // }





// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Features from './components/Features'

// const Page = () => {
//   return (
//     <>
//     <Navbar />
//     <Hero />
//     <Features />
//     </>
//   )
// }

// export default Page







// app/page.tsx (Home Page - Real Estate Selling Website)
import Link from 'next/link';
import PropertyCard from './components/PropertyCard';
import Navbar from './components/Navbar';

const featuredProperties = [
  {
    id: 1,
    title: '3 BHK Apartment in Jaipur',
    location: 'Vaishali Nagar, Jaipur',
    price: '₹75 Lakhs',
    image: '/property1.jpg',
    slug: '3-bhk-apartment-jaipur'
  },
  {
    id: 2,
    title: 'Luxury Villa in Delhi',
    location: 'South Delhi',
    price: '₹2.5 Crores',
    image: '/property2.jpg',
    slug: 'luxury-villa-delhi'
  },
  {
    id: 3,
    title: '2 BHK Flat in Bangalore',
    location: 'Whitefield, Bangalore',
    price: '₹60 Lakhs',
    image: '/property3.jpg',
    slug: '2-bhk-flat-bangalore'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
<Navbar />

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-blue-100 to-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Property</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Explore handpicked properties for sale across top cities in India. Verified listings. Easy inquiries.
        </p>
        <Link href="/properties" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
          Browse Properties
        </Link>
      </section>

      {/* Featured Properties */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-semibold mb-8 text-center">Featured Properties</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

       <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
            <p>All properties are 100% verified and updated in real-time.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">No Brokerage</h3>
            <p>Direct owner and builder listings to save on extra costs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Instant Visits</h3>
            <p>Schedule property visits at your convenience instantly.</p>
          </div>
        </div>
      </section>

      {/* Explore by City */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore by City</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Jaipur', 'Delhi', 'Mumbai', 'Bangalore'].map(city => (
            <div key={city} className="bg-blue-50 p-6 rounded shadow hover:shadow-md cursor-pointer">{city}</div>
          ))}
        </div>
      </section>

       <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <p className="italic mb-4">&uot;Buying a home has never been this easy! Great service and excellent properties.&uot;</p>
          <p className="font-semibold">- Rohan Mehta</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Buy or Sell?</h2>
        <p className="mb-6">Talk to our expert agents and get personalized advice.</p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">Contact Us</Link>
      </section>


      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} EstateFinder. All rights reserved.
      </footer>
    </main>
  );
}
