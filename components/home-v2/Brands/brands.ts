export type BrandCategory = "All" | "Luxury" | "Popular" | "EV";

export interface Brand {
  name: string;
  logo: string;
  categories: Exclude<BrandCategory, "All">[];
}

export const brands: Brand[] = [
  // Luxury
  {
    name: "BMW",
    logo: "/brands/bmw.avif",
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
    logo: "/brands/volvo1.png",
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

  // Popular
  {
    name: "Maruti Suzuki",
    logo: "/brands/maruti-suzuki.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "Toyota",
    logo: "/brands/toyota.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "Honda",
    logo: "/brands/honda.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "Hyundai",
    logo: "/brands/hyundai.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "Kia",
    logo: "/brands/kia.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "Tata",
    logo: "/brands/tata.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "Mahindra",
    logo: "/brands/mahindra.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "Volkswagen",
    logo: "/brands/volkswagen.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "MG",
    logo: "/brands/mg.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "Skoda",
    logo: "/brands/skoda.avif",
    categories: ["Popular", "EV"],
  },
  {
    name: "Jeep",
    logo: "/brands/jeep.png",
    categories: ["Popular"],
  },
  {
    name: "Nissan",
    logo: "/brands/nissan.avif",
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

  // EV
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