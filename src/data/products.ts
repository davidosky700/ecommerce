import { Product, Category } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Phones",
    price: 999,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484bce71?q=80&w=2070&auto=format&fit=crop",
    description: "The latest iPhone with A17 Pro chip, titanium design, and advanced camera system.",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "MacBook Pro 16",
    category: "Laptops",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    description: "Supercharged for pros with the M3 Pro chip, 16-inch Liquid Retina XDR display.",
    rating: 4.9
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    category: "Phones",
    price: 1199,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop",
    description: "Samsung's flagship phone with S Pen support, 200MP camera, and AI features.",
    rating: 4.7
  },
  {
    id: 4,
    name: "Dell XPS 15",
    category: "Laptops",
    price: 1899,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2069&auto=format&fit=crop",
    description: "Premium laptop with InfinityEdge display, 12th Gen Intel Core processors.",
    rating: 4.6
  },
  {
    id: 5,
    name: "AirPods Pro 2",
    category: "Accessories",
    price: 249,
    image: "https://images.unsplash.com/photo-1606741965429-8cc3d5d04482?q=80&w=2073&auto=format&fit=crop",
    description: "Active Noise Cancellation, Transparency mode, and Spatial Audio.",
    rating: 4.8
  },
  {
    id: 6,
    name: "iPad Pro 12.9",
    category: "Tablets",
    price: 1099,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2033&auto=format&fit=crop",
    description: "Liquid Retina XDR display, M2 chip, and Apple Pencil hover.",
    rating: 4.7
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    category: "Accessories",
    price: 399,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
    description: "Industry-leading noise canceling headphones with exceptional sound quality.",
    rating: 4.9
  },
  {
    id: 8,
    name: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    price: 1499,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop",
    description: "Gaming laptop with AMD Ryzen 9 processor and NVIDIA GeForce RTX graphics.",
    rating: 4.5
  }
];

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Phones",
    price: 999,
    image: "https://images.unsplash.com/photo-1702289613007-8b830e2520b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D",
    description: "The latest iPhone with A17 Pro chip, titanium design, and advanced camera system.",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "MacBook Pro 16",
    category: "Laptops",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    description: "Supercharged for pros with the M3 Pro chip, 16-inch Liquid Retina XDR display.",
    rating: 4.9
  },
  {
    id: 5,
    name: "AirPods Pro 2",
    category: "Accessories",
    price: 249,
    image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWlyUG9kcyUyMFBybyUyMDJ8ZW58MHx8MHx8fDA%3D",
    description: "Active Noise Cancellation, Transparency mode, and Spatial Audio.",
    rating: 4.8
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    category: "Accessories",
    price: 399,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
    description: "Industry-leading noise canceling headphones with exceptional sound quality.",
    rating: 4.9
  }
];

export const dealProducts: Product[] = [
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    category: "Phones",
    price: 1199,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop",
    description: "Samsung's flagship phone with S Pen support, 200MP camera, and AI features.",
    rating: 4.7,
    discount: 15
  },
  {
    id: 4,
    name: "Dell XPS 15",
    category: "Laptops",
    price: 1899,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2069&auto=format&fit=crop",
    description: "Premium laptop with InfinityEdge display, 12th Gen Intel Core processors.",
    rating: 4.6,
    discount: 20
  },
  {
    id: 8,
    name: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    price: 1499,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop",
    description: "Gaming laptop with AMD Ryzen 9 processor and NVIDIA GeForce RTX graphics.",
    rating: 4.5,
    discount: 10
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop",
    count: 24
  },
  {
    id: 2,
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
    count: 18
  },
  {
    id: 3,
    name: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2033&auto=format&fit=crop",
    count: 12
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=2078&auto=format&fit=crop",
    count: 36
  }
];