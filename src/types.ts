export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    rating: number;
    discount?: number;
    quantity?: number;
    isNew?: boolean;
  }
  
  export interface Category {
    id: number;
    name: string;
    image: string;
    count: number;
  }