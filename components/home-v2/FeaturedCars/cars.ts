export interface Car {
  id: number;
  brand: string;
  name: string;
  image: string;
  price: string;
  emi: string;
  fuel: string;
  transmission: string;
  featured?: boolean;
}

export const cars: Car[] = [
  {
    id: 1,
    brand: "BMW",
    name: "BMW X5",
    image: "/images/cars/bmw-x5.png",
    price: "₹95.90 Lakh",
    emi: "₹1.29L/mo",
    fuel: "Petrol",
    transmission: "Automatic",
    featured: true,
  },
  {
    id: 2,
    brand: "Hyundai",
    name: "Creta",
    image: "/images/cars/creta.png",
    price: "₹14.99 Lakh",
    emi: "₹24,900/mo",
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: 3,
    brand: "Tata",
    name: "Nexon",
    image: "/images/cars/nexon.png",
    price: "₹12.49 Lakh",
    emi: "₹20,700/mo",
    fuel: "Diesel",
    transmission: "Manual",
  },
  {
    id: 4,
    brand: "Kia",
    name: "Seltos",
    image: "/images/cars/seltos.png",
    price: "₹16.49 Lakh",
    emi: "₹27,300/mo",
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: 5,
    brand: "Toyota",
    name: "Innova Hycross",
    image: "/images/cars/hycross.png",
    price: "₹19.99 Lakh",
    emi: "₹33,200/mo",
    fuel: "Hybrid",
    transmission: "Automatic",
  },
];