import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { addToCart, getTotals } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import CartIconSimple from "./CartIconSimple";




const ProductCard = ({ product }) => {
  const dispatch = useDispatch();



  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());

  };


  const {data, error, isLoading} = useGetAllProductsQuery();

  return (
    <div className="m-10 w-full max-w-xs overflow-hidden  bg-white shadow-md  ">
          <img
            className="h-100  object-cover"
            src={product.image}
            alt={product.name}
          />
          <div className="mt-1 px-5 ">
          <div className="flex flex-col items-center gap-2">
                <div className="razmaknut_text text-center">
                    {product.name}
                </div>
                <div className="normalan_text capitalize text-sm text-center tracking-wide">
                    {product.desc}
                </div>
                
          </div>
          <div className="flex flex-col  items-center justify-end pt-8">
                
                <div className="normalan_text  text-center text-lg">
                    {product.price}€
                </div>

                <Button onClick={() => handleAddToCart(product)}> 
                    <div className="flex  items-center gap-2 razmaknut_text tracking-wider text-sm">
                        <CartIconSimple />
                        Add to cart
                    </div>
                </Button>
          </div>
        
     
          
            
        </div>

    </div>
  );
};

export default ProductCard;
