// app/properties/page.tsx
'use client';

import { useState, useMemo, ChangeEvent } from 'react';
import PropertyCard from '../components/PropertyCard';
import Navbar from '../components/Navbar';
import { allProperties } from '../data/properties';

function parsePrice(price: string): number {
  const num = parseFloat(price.replace(/[₹,\s]/g, ''));
  return price.includes('Crore') ? num * 100 : num;
}

export default function PropertiesPage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('All');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;

  const locations: string[] = [
    'All',
    ...Array.from(
      new Set(
        allProperties.map((p: Property) => {
          const parts = p.location.split(',');
          return parts.length > 1 ? parts[1].trim() : parts[0].trim();
        })
      )
    ),
  ];

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const priceValue = parsePrice(property.price);
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation =
        locationFilter === 'All' || property.location.includes(locationFilter);
      const matchesPrice = priceValue >= minPrice && priceValue <= maxPrice;
      return matchesSearch && matchesLocation && matchesPrice;
    });
  }, [searchTerm, locationFilter, minPrice, maxPrice]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />

            <select
              className="border px-4 py-2 rounded w-full"
              value={locationFilter}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setLocationFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            <div>
              <label className="block mb-1 font-medium">Min Price (in Lakhs)</label>
              <input
                type="number"
                className="border px-4 py-2 rounded w-full"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMinPrice(Number(e.target.value) || 0)}
                placeholder="0"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Max Price (in Lakhs)</label>
              <input
                type="number"
                className="border px-4 py-2 rounded w-full"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMaxPrice(Number(e.target.value) || Infinity)
                }
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
            <span className="self-center">
              Page {currentPage} of {totalPages}
            </span>
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
