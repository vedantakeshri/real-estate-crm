// // app/properties/page.tsx
// 'use client';

// import { useState, useMemo } from 'react';
// import PropertyCard from '../components/PropertyCard';
// import Navbar from '../components/Navbar';

// const allProperties = [
//   {
//     id: 1,
//     title: '3 BHK Apartment in Jaipur',
//     location: 'Vaishali Nagar, Jaipur',
//     price: '₹75 Lakhs',
//     image: '/property1.jpg',
//     slug: '3-bhk-apartment-jaipur'
//   },
//   {
//     id: 2,
//     title: 'Luxury Villa in Delhi',
//     location: 'South Delhi',
//     price: '₹2.5 Crores',
//     image: '/property2.jpg',
//     slug: 'luxury-villa-delhi'
//   },
//   {
//     id: 3,
//     title: '2 BHK Flat in Bangalore',
//     location: 'Whitefield, Bangalore',
//     price: '₹60 Lakhs',
//     image: '/property3.jpg',
//     slug: '2-bhk-flat-bangalore'
//   },
//   {
//     id: 4,
//     title: 'Farmhouse in Udaipur',
//     location: 'Udaipur, Rajasthan',
//     price: '₹1.2 Crores',
//     image: '/property4.jpg',
//     slug: 'farmhouse-udaipur'
//   },
//   {
//     id: 5,
//     title: 'Studio Apartment in Pune',
//     location: 'Koregaon Park, Pune',
//     price: '₹45 Lakhs',
//     image: '/property5.jpg',
//     slug: 'studio-apartment-pune'
//   }
// ];

// export default function PropertiesPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [locationFilter, setLocationFilter] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;

//     const locations = ['All', ...Array.from(new Set(allProperties.map((p) => {
//     const parts = p.location.split(',');
//     return parts.length > 1 ? parts[1].trim() : parts[0].trim();
//   })))];

//   const filteredProperties = useMemo(() => {
//     return allProperties.filter((property) => {
//       const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                             property.location.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesLocation = locationFilter === 'All' || property.location.includes(locationFilter);
//       return matchesSearch && matchesLocation;
//     });
//   }, [searchTerm, locationFilter]);

//   const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
//   const paginatedProperties = filteredProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <>
//     <Navbar />
//     <main className="min-h-screen bg-white text-gray-900 px-6 py-12 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">All Properties</h1>

//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="Search by title or location"
//           className="border px-4 py-2 rounded w-full md:w-1/2"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select
//           className="border px-4 py-2 rounded w-full md:w-1/4"
//           value={locationFilter}
//           onChange={(e) => {
//             setLocationFilter(e.target.value);
//             setCurrentPage(1);
//           }}
//         >
//           {locations.map((loc) => (
//             <option key={loc} value={loc}>{loc}</option>
//           ))}
//         </select>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         {paginatedProperties.map((property) => (
//           <PropertyCard key={property.id} property={property} />
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div className="mt-10 flex justify-center gap-4">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <span className="self-center">Page {currentPage} of {totalPages}</span>
//           <button
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </main>
//     </>
//   );
// }


















// app/properties/page.tsx
'use client';

import { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import Navbar from '../components/Navbar';

const allProperties = [
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
  },
  {
    id: 4,
    title: 'Farmhouse in Udaipur',
    location: 'Udaipur, Rajasthan',
    price: '₹1.2 Crores',
    image: '/property4.jpg',
    slug: 'farmhouse-udaipur'
  },
  {
    id: 5,
    title: 'Studio Apartment in Pune',
    location: 'Koregaon Park, Pune',
    price: '₹45 Lakhs',
    image: '/property5.jpg',
    slug: 'studio-apartment-pune'
  }
];

function parsePrice(price: string) {
  const num = parseFloat(price.replace(/[₹,\s]/g, ''));
  return price.includes('Crore') ? num * 100 : num;
}

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const locations = ['All', ...Array.from(new Set(allProperties.map((p) => {
    const parts = p.location.split(',');
    return parts.length > 1 ? parts[1].trim() : parts[0].trim();
  })))];

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const priceValue = parsePrice(property.price);
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === 'All' || property.location.includes(locationFilter);
      const matchesPrice = priceValue >= minPrice && priceValue <= maxPrice;
      return matchesSearch && matchesLocation && matchesPrice;
    });
  }, [searchTerm, locationFilter, minPrice, maxPrice]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">All Properties</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <aside className="md:w-1/4 space-y-4">
          <input
            type="text"
            placeholder="Search by title or location"
            className="border px-4 py-2 rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border px-4 py-2 rounded w-full"
            value={locationFilter}
            onChange={(e) => {
              setLocationFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <div>
            <label className="block mb-1 font-medium">Min Price (in Lakhs)</label>
            <input
              type="number"
              className="border px-4 py-2 rounded w-full"
              onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
              placeholder="0"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Max Price (in Lakhs)</label>
            <input
              type="number"
              className="border px-4 py-2 rounded w-full"
              onChange={(e) => setMaxPrice(Number(e.target.value) || Infinity)}
              placeholder="e.g. 300"
            />
          </div>
        </aside>

        <section className="md:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </section>
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </main>
    </>
  );
}

