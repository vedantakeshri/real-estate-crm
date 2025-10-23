// src/data/properties.js
export const allProperties = [
  {
    id: 1,
    title: "3 BHK Apartment in Jaipur",
    location: "Vaishali Nagar, Jaipur",
    price: "₹75 Lakhs",
    image: "/property1.jpg",
    slug: "3-bhk-apartment-jaipur",
    bedrooms: 3,
    bathrooms: 2,
    area: "1500 sq.ft",
    description:
      "This spacious 3 BHK apartment is located in the heart of Vaishali Nagar, Jaipur. Surrounded by malls, schools, and parks, it's ideal for families seeking comfort and convenience.",
    features: ["Balcony", "2 Parking Slots", "Lift", "24/7 Security"],
  },
  {
    id: 2,
    title: "Luxury Villa in Delhi",
    location: "South Delhi",
    price: "₹2.5 Crores",
    image: "/property2.jpg",
    slug: "luxury-villa-delhi",
    bedrooms: 5,
    bathrooms: 4,
    area: "4000 sq.ft",
    description:
      "A stunning luxury villa with Italian marble flooring, modular kitchen, and private garden. Located in the prime South Delhi neighborhood.",
    features: ["Pool", "Garden", "Gym", "Security"],
  },
  {
    id: 3,
    title: "2 BHK Apartment in Pune",
    location: "Koregaon Park, Pune",
    price: "₹90 Lakhs",
    image: "/property3.jpg",
    slug: "2-bhk-apartment-pune",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq.ft",
    description:
      "Modern 2 BHK apartment in Pune’s premium Koregaon Park area, offering a blend of luxury and tranquility with easy access to restaurants and nightlife.",
    features: ["Clubhouse", "Swimming Pool", "Gym", "Power Backup"],
  },
  {
    id: 4,
    title: "4 BHK Penthouse in Mumbai",
    location: "Bandra West, Mumbai",
    price: "₹5 Crores",
    image: "/property4.jpg",
    slug: "4-bhk-penthouse-mumbai",
    bedrooms: 4,
    bathrooms: 5,
    area: "3500 sq.ft",
    description:
      "Experience panoramic sea views from this elegant 4 BHK penthouse in Bandra West. Designed with premium interiors and smart home automation.",
    features: ["Sea View", "Private Terrace", "Gym", "Servant Room"],
  },
  {
    id: 5,
    title: "1 BHK Studio Apartment in Bangalore",
    location: "Whitefield, Bangalore",
    price: "₹55 Lakhs",
    image: "/property5.jpg",
    slug: "1-bhk-studio-bangalore",
    bedrooms: 1,
    bathrooms: 1,
    area: "700 sq.ft",
    description:
      "Compact and elegant studio apartment perfect for IT professionals, located close to major tech parks in Whitefield.",
    features: ["Lift", "Power Backup", "Security", "Covered Parking"],
  },
  {
    id: 6,
    title: "Farmhouse in Manesar",
    location: "Manesar, Gurgaon",
    price: "₹3.2 Crores",
    image: "/property6.jpg",
    slug: "farmhouse-manesar",
    bedrooms: 6,
    bathrooms: 5,
    area: "9000 sq.ft",
    description:
      "Peaceful farmhouse surrounded by greenery, ideal for weekend getaways or luxury living. Comes with a swimming pool and large garden.",
    features: ["Private Pool", "Lawn", "Servant Quarters", "CCTV"],
  },
  {
    id: 7,
    title: "3 BHK Villa in Hyderabad",
    location: "Gachibowli, Hyderabad",
    price: "₹1.1 Crores",
    image: "/property7.jpg",
    slug: "3-bhk-villa-hyderabad",
    bedrooms: 3,
    bathrooms: 3,
    area: "2000 sq.ft",
    description:
      "Beautifully designed villa located in a secure gated community with access to premium clubhouse facilities.",
    features: ["Clubhouse", "Jogging Track", "Swimming Pool", "Gym"],
  },
  {
    id: 8,
    title: "2 BHK Flat in Chandigarh",
    location: "Sector 35, Chandigarh",
    price: "₹82 Lakhs",
    image: "/property8.jpg",
    slug: "2-bhk-flat-chandigarh",
    bedrooms: 2,
    bathrooms: 2,
    area: "1100 sq.ft",
    description:
      "Newly built 2 BHK flat with modular kitchen and park-facing balcony. Close to schools and hospitals.",
    features: ["Lift", "Balcony", "24x7 Security", "Covered Parking"],
  },
];



export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  slug: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  description: string;
  features: string[];
  type?: string; // optional if you want to categorize properties
};
