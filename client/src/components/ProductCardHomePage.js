import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "../features/cartSlice";
import { productsApi, useGetAllProductsQuery } from "../features/productsApi";
import { Button } from "semantic-ui-react";
import CartIcon from "./CartIcon";
import CartIconSimple from "./CartIconSimple";




const ProductCardHomePage = ({ product }) => {
  const dispatch = useDispatch();



  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());

  };


  const {data, error, isLoading} = useGetAllProductsQuery();

  return (
    <div className="m-3 w-full max-w-xs overflow-hidden  bg-white shadow-md" style={{ height: "470px" }} >
          <img
            style={{ height: "310px" , width: "100%"}}
            className="object-cover m-0"
            src={product.image}
            alt={product.name}
          />

          <div style={{ height: "150px" }} className="p-1">
                <div className="h-1/2 mt-1 px-2 razmaknut_text text-center text-lg">
                    {product.name}
                </div>

                
                
                <div className="h-1/2  items-center text-center justify-center  pt-1">
                <div className="  normalan_text text-lg   ">
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

export default ProductCardHomePage;
