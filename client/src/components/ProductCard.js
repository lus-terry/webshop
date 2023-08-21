import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "../features/cartSlice";
import { productsApi, useGetAllProductsQuery } from "../features/productsApi";




const ProductCard = ({ product }) => {
  const dispatch = useDispatch();



  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());

  };

  const {data, error, isLoading} = useGetAllProductsQuery();

  return (
    <div className="m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative">
        <a href="#">
          <img
            className="h-60 rounded-t-lg object-cover"
            src={product.image}
            alt={product.name}
          />
        </a>
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
          Sale
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">
            {product.name}
          </h5>
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            5.0
          </span>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path for star rating */}
          </svg>
          {/* Add more star SVGs here for different ratings */}
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{product.price}</span>
            <span className="text-sm text-slate-900 line-through">{product.price*2}</span>
          </p>
          <a
            href="#"
            className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <button onClick={() => handleAddToCart(product)}>  Add to cart
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
