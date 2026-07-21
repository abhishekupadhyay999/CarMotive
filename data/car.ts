export interface Car {
  id: number;
  name: string;
  price: string;
  year: string;
  fuel: string;
  transmission: string;
  kilometers: string;
  image: string;
}

export const featuredCars: Car[] = [
  {
    id: 1,
    name: "BMW X5",
    price: "₹58.50 Lakhs",
    year: "2022",
    fuel: "Diesel",
    transmission: "Automatic",
    kilometers: "34,000 KM",
    image: "/images/cars/bmw-x5.jpg",
  },
  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    price: "₹46.90 Lakhs",
    year: "2023",
    fuel: "Petrol",
    transmission: "Automatic",
    kilometers: "18,000 KM",
    image: "/images/cars/mercedes-c.jpg",
  },
  {
    id: 3,
    name: "Range Rover Velar",
    price: "₹71.90 Lakhs",
    year: "2022",
    fuel: "Diesel",
    transmission: "Automatic",
    kilometers: "29,000 KM",
    image: "/images/cars/velar.jpg",
  },
];