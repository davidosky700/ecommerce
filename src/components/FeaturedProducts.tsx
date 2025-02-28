import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { featuredProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const FeaturedProducts: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600">Discover our handpicked selection of premium tech</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full text-gray-700 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="ml-auto flex items-center">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-lg">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;