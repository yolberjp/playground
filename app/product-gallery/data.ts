export interface Product {
  id: number;
  title: string;
  price: number;
  currency: string;
  previousPrice?: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Monstera",
    price: 45.99,
    currency: "USD",
    previousPrice: 59.99,
    imageUrl: "/products/plant-1.webp",
  },
  {
    id: 2,
    title: "Fiddle Leaf",
    price: 89.99,
    currency: "USD",
    imageUrl: "/products/plant-2.webp",
  },
  {
    id: 3,
    title: "Snake Plant",
    price: 32.50,
    currency: "USD",
    previousPrice: 39.99,
    imageUrl: "/products/plant-3.webp",
  },
  {
    id: 4,
    title: "Pothos",
    price: 24.99,
    currency: "USD",
    imageUrl: "/products/plant-4.webp",
  },
  {
    id: 5,
    title: "ZZ Plant",
    price: 67.99,
    currency: "USD",
    previousPrice: 79.99,
    imageUrl: "/products/plant-5.webp",
  },
  {
    id: 6,
    title: "Peace Lily",
    price: 38.99,
    currency: "USD",
    imageUrl: "/products/plant-6.webp",
  },
]; 