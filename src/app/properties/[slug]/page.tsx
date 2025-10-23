"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { allProperties } from "../../data/properties";
import Navbar from "@/app/components/Navbar";
import { useState, useEffect } from "react";

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = allProperties.find((p) => p.slug === params.slug);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);
    if (property) setAdded(favs.includes(property.id));
  }, [property]);

  if (!property) {
    notFound();
  }

  const handleAddFavorite = () => {
    if (!property) return;
    if (!favorites.includes(property.id)) {
      const updated = [...favorites, property.id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFavorites(updated);
      setAdded(true);
    }
  };

  // Get similar properties (same city or type)
const similarProperties = allProperties
  .filter(
    (p) =>
      p.slug !== property.slug &&
      p.location.includes(property.location.split(",")[1]?.trim())
  )
  .slice(0, 4);


  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/properties"
          className="inline-block mb-8 text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
        >
          ← Back to Listings
        </Link>

        {/* Property Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          {/* Hero Image */}
          <div className="relative w-full h-96 md:h-[500px] group">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {property.title}
              </h1>
              <p className="text-gray-200 text-lg">{property.location}</p>
            </div>
          </div>

          {/* Property Details */}
          <div className="p-8 md:p-12">
            <p className="text-3xl font-semibold text-blue-600 mb-6">
              {property.price}
            </p>

            {/* Basic Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 font-medium mb-8">
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
                🛏️ <span className="font-semibold">{property.bedrooms}</span> Bedrooms
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
                🛁 <span className="font-semibold">{property.bathrooms}</span> Bathrooms
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
                📏 <span className="font-semibold">{property.area}</span> Area
              </div>
            </div>

            {/* Features */}
            {property.features && property.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🏡 Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                  {property.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg hover:bg-blue-50 transition"
                    >
                      ✅ {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description */}
            <div className="text-gray-700 leading-relaxed text-lg mb-10">
              <h3 className="text-2xl font-semibold mb-3">About this property</h3>
              <p>{property.description}</p>
            </div>

            {/* Contact & Favorite */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917992383447?text=Hi! I'm interested in your property listed on your website."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 font-semibold text-lg text-center"
              >
                💬 Contact on WhatsApp
              </a>

              <button
                onClick={handleAddFavorite}
                disabled={added}
                className={`px-10 py-4 rounded-xl text-white font-semibold text-lg shadow-lg transition-transform duration-300 ${
                  added ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {added ? "⭐ Added to Favorites" : "⭐ Add to Favorites"}
              </button>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">🏘️ Similar Properties</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarProperties.map((p) => (
                <Link
                  key={p.id}
                  href={`/properties/${p.slug}`}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-xl transition group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{p.location}</p>
                    <p className="text-blue-600 font-bold mt-3">{p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
