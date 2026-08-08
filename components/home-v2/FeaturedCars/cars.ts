export interface Car {
  id: number;
  brand: string;
  name: string;
  slug: string;
  image: string;
  price: string;
  emi: string;
  fuel: string;
  transmission: string;
  engine: string;
  featured?: boolean;
}

export const cars: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    name: "Innova Hycross",
    slug: "toyota-innova-hycross",
    image: "/images/featured/hycross.png",
    price: "₹19.94 Lakh",
    emi: "₹38,500/mo",
    fuel: "Hybrid",
    transmission: "Automatic",
    engine: "2.0L Petrol Hybrid",
    featured: true,
  },

  {
    id: 2,
    brand: "Mahindra",
    name: "XUV700",
    slug: "mahindra-xuv700",
    image: "/images/featured/xuv700.avif",
    price: "₹14.49 Lakh",
    emi: "₹27,900/mo",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    engine: "2.0L Turbo",
    featured: true,
  },

  {
    id: 3,
    brand: "Toyota",
    name: "Fortuner",
    slug: "toyota-fortuner",
    image: "/images/featured/fortuner.avif",
    price: "₹36.05 Lakh",
    emi: "₹69,900/mo",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.8L Diesel",
    featured: true,
  },

  {
    id: 4,
    brand: "Toyota",
    name: "Innova Crysta",
    slug: "toyota-innova-crysta",
    image: "/images/featured/crysta.avif",
    price: "₹19.99 Lakh",
    emi: "₹38,800/mo",
    fuel: "Diesel",
    transmission: "Manual",
    engine: "2.4L Diesel",
    featured: true,
  },

  {
    id: 5,
    brand: "Kia",
    name: "Seltos",
    slug: "kia-seltos",
    image: "/images/featured/seltos.png",
    price: "₹11.19 Lakh",
    emi: "₹21,900/mo",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    engine: "1.5L Petrol",
    featured: true,
  },

  {
    id: 6,
    brand: "Hyundai",
    name: "Creta",
    slug: "hyundai-creta",
    image: "/images/featured/creta.png",
    price: "₹11.11 Lakh",
    emi: "₹21,500/mo",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    engine: "1.5L Petrol",
    featured: true,
  },
];