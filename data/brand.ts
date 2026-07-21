export type BrandCategory = "All" | "Luxury" | "Popular" | "EV";

export interface Brand {
  name: string;
  logo: string;
  category: Exclude<BrandCategory, "All">;
}

export const brands: Brand[] = [
  // Luxury Brands
  {
    name: "BMW",
    logo: "/brands/BMW.svg",
    category: "Luxury",
  },
  {
    name: "Mercedes-Benz",
    logo: "/brands/mercedes.png",
    category: "Luxury",
  },
  {
    name: "Audi",
    logo: "/brands/audi.png",
    category: "Luxury",
  },
  {
    name: "Volvo",
    logo: "/brands/volvo.jpeg",
    category: "Luxury",
  },
  {
    name: "Land Rover",
    logo: "/brands/land-rover.png",
    category: "Luxury",
  },

  // Popular Brands
  {
    name: "Toyota",
    logo: "/brands/toyota.png",
    category: "Popular",
  },
  {
    name: "Honda",
    logo: "/brands/honda-11.svg",
    category: "Popular",
  },
  {
    name: "Hyundai",
    logo: "/brands/hyundai.png",
    category: "Popular",
  },
  {
    name: "Kia",
    logo: "/brands/kia.png",
    category: "Popular",
  },
  {
    name: "Tata",
    logo: "/brands/tata.png",
    category: "Popular",
  },
  {
    name: "Mahindra",
    logo: "/brands/mahindra.png",
    category: "Popular",
  },
  {
    name: "Volkswagen",
    logo: "/brands/volkswagen.jpeg",
    category: "Popular",
  },
  {
    name: "MG",
    logo: "/brands/MG.png",
    category: "Popular",
  },
  {
    name: "Skoda",
    logo: "/brands/skoda.png",
    category: "Popular",
  },
  {
    name: "Jeep",
    logo: "/brands/jeep.png",
    category: "Popular",
  },

  // Electric Brands
  {
    name: "BYD",
    logo: "/brands/BYD.png",
    category: "EV",
  },
  {
    name: "VinFast",
    logo: "/brands/vinfast.jpeg",
    category: "EV",
  },
];