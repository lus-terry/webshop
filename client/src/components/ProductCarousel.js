import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex items-center">
        {currentIndex !== 0 && (
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-black text-white rounded-full"
          >
            {"<"}
          </button>
        )}
        <div className="flex transition-all ease-in-out duration-300">
          {products.map((product, index) => (
            <div
              key={index}
              className={`transform ${
                currentIndex === index ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <ProductCard/>
            </div>
          ))}
        </div>
        {currentIndex !== products.length - 1 && (
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-black text-white rounded-full"
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
