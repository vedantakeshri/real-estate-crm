// // components/PropertyCard.tsx
// import Link from 'next/link';

// type Property = {
//   id: number;
//   title: string;
//   location: string;
//   price: string;
//   image: string;
//   slug: string;
// };

// export default function PropertyCard({ property }: { property: Property }) {
//   return (
//     <div className="border rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden">
//       <img src={property.image} alt={property.title} className="w-full h-52 object-cover" />
//       <div className="p-4">
//         <h4 className="text-lg font-semibold mb-1">{property.title}</h4>
//         <p className="text-sm text-gray-600">{property.location}</p>
//         <p className="text-blue-600 font-bold mt-2">{property.price}</p>
//         <Link href={`/property/${property.slug}`} className="inline-block mt-4 text-sm text-blue-600 hover:underline">
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// }









// components/PropertyCard.tsx
import Link from 'next/link';

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  slug: string;
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transform transition duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden cursor-pointer">
      <img src={property.image} alt={property.title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-1">{property.title}</h4>
        <p className="text-sm text-gray-600">{property.location}</p>
        <p className="text-blue-600 font-bold mt-2">{property.price}</p>
        <Link href={`/properties/${property.slug}`} className="inline-block mt-4 text-sm text-blue-600 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
}

