export type BrandCategory = "All" | "Luxury" | "Popular" | "EV";

export interface Brand {
  name: string;
  logo: string;
  categories: Exclude<BrandCategory, "All">[];
}

export const brands: Brand[] = [
  // =======================
  // Luxury Brands
  // =======================
  {
    name: "BMW",
    logo: "/brands/BMW.svg",
    categories: ["Luxury", "EV"],
  },
  {
    name: "Mercedes-Benz",
    logo: "/brands/mercedes.png",
    categories: ["Luxury", "EV"],
  },
  {
    name: "Audi",
    logo: "/brands/audi.png",
    categories: ["Luxury", "EV"],
  },
  {
    name: "Volvo",
    logo: "/brands/volvo.jpeg",
    categories: ["Luxury", "EV"],
  },
  {
    name: "Land Rover",
    logo: "/brands/land-rover.png",
    categories: ["Luxury", "EV"],
  },
  {
    name: "Lexus",
    logo: "/brands/lexus.png",
    categories: ["Luxury", "EV"],
  },

  // =======================
  // Popular Brands
  // =======================
  {
    name: "Maruti Suzuki",
    logo: "/brands/maruti-suzuki.svg",
    categories: ["Popular", "EV"],
  },
  {
    name: "Toyota",
    logo: "/brands/toyota.png",
    categories: ["Popular", "EV"],
  },
  {
    name: "Honda",
    logo: "/brands/honda.png",
    categories: ["Popular", "EV"],
  },
  {
    name: "Hyundai",
    logo: "/brands/hyundai.png",
    categories: ["Popular", "EV"],
  },
  {
    name: "Kia",
    logo: "/brands/kia.jpeg",
    categories: ["Popular", "EV"],
  },
  {
    name: "Tata",
    logo: "/brands/tata.png",
    categories: ["Popular", "EV"],
  },
  {
    name: "Mahindra",
    logo: "/brands/mahindra.png",
    categories: ["Popular", "EV"],
  },
  {
    name: "Volkswagen",
    logo: "/brands/volkswagen.jpeg",
    categories: ["Popular", "EV"],
  },
  {
    name: "MG",
    logo: "/brands/MG.png",
    categories: ["Popular", "EV"],
  },
  {
    name: "Skoda",
    logo: "/brands/skoda.png",
    categories: ["Popular", "EV"],
  },
  {
    name: "Jeep",
    logo: "/brands/jeep.png",
    categories: ["Popular"],
  },
  {
    name: "Nissan",
    logo: "/brands/nissan.png",
    categories: ["Popular"],
  },
  {
    name: "Renault",
    logo: "/brands/Renault_2021.svg",
    categories: ["Popular"],
  },
  {
    name: "Citroën",
    logo: "/brands/citroen.png",
    categories: ["Popular", "EV"],
  },

  // =======================
  // EV Only Brands
  // =======================
  {
    name: "BYD",
    logo: "/brands/BYD.png",
    categories: ["EV"],
  },
  {
    name: "VinFast",
    logo: "/brands/vinfast.jpeg",
    categories: ["EV"],
  },
];