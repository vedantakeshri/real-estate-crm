"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { allProperties, Property } from "@/app/data/properties";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
}

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<Property[]>([]);

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (!loggedInUser) {
      router.push("/login");
      return;
    }
    setUser(loggedInUser);

    // Load favorite properties
    const favoriteIds: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    const favoriteProperties = allProperties.filter((p) => favoriteIds.includes(p.id));
    setFavorites(favoriteProperties);
  }, [router]);

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome, {user.name} 👋
        </h1>

        {favorites.length === 0 ? (
          <p className="text-gray-600 text-lg">
            You have no favorite properties yet. Browse{" "}
            <Link href="/properties" className="text-blue-600 hover:underline">
              listings
            </Link>{" "}
            to add favorites.
          </p>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              ⭐ Your Favorite Properties
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {favorites.map((p) => (
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
};

export default DashboardPage;
