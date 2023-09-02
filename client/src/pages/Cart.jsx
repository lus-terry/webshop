import {  useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";

import { Button, Sidebar } from "semantic-ui-react";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../features/cartSlice";
import { useEffect } from "react";
import PayButton from "../components/PayButton";




const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleNavigate = (link) => {
        navigate(link);
    };
    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };
    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    };
    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <>
            <Navbar/>



        

            <div className="content_container_normal w-full ">
     
            <div className="naslov pb-10">Shopping Cart</div>
            

            {cart.cartItems.length === 0 ? (
                <div className="flex flex-col items-center">
                    <div className="obican_text">your cart is currently empty</div>
             
                    <Button className="w-1/3 " onClick={() => handleNavigate("/shop")} > start shopping</Button>
                                    
                    
                 
                </div>
            ) : (
                <div >
                
                    <div className=" flex   text-center items-center justify-between  border-gray-500 border-b-2  " >
                        <div className="razmaknut_text w-2/5 text-lg ">PRODUCT</div>
                        <div className="razmaknut_text w-1/5 text-lg ">PRICE</div>
                        <div className="razmaknut_text w-1/5 text-lg ">QUANTITY</div>
                        <div className="razmaknut_text w-1/5 text-lg ">TOTAL</div>
                 
                    </div>

                   
                    <div className=" obican_text flex flex-col w-screen items-center pt-5">
                        {cart.cartItems?.map(cartItem => (
                            <div className="flex border-b border-t h-50 items-center w-screen" key= {cartItem._id}>


                                {/*div koji sadrži sliku, ime i description */}
                                 <div className=" w-2/5 flex items-left ">
                                    <img className= "h-40 pr-8 p-2 pl-20" src={cartItem.image} alt={cartItem.name} />
                                    <div className=" flex flex-col text-left justify-center">
                                        <h3 className="razmaknut_text">{cartItem.name}</h3>
                                       
                                    </div>
                                </div>

                                {/*div koji sadrži price */}
                                <div className="flex w-1/5 text-center justify-center">
                                    €{cartItem.price}
                                </div>

                                {/*div koji sadrži quantity */}
                                <div class="flex w-1/5 items-center justify-center " >
                                    <div class="flex text-center justify-between px-2 items-center border-zinc-500/50 border-2 p-1" style={{width: '150px'}}>
                                        <button onClick={() => handleDecreaseCart(cartItem)}
                                                className="rounded-full text-center flex items-center justify-center overflow-hidden bg-zinc-500/25 w-6 h-6 pb-1 "
                                        >
                                           <span className="font-thin">-</span>
                                        </button>
                                        <div class="pr-4 pl-4 text-center items-center justify-center cart-total">
                                            {cartItem.cartTotalQuantity}
                                        </div>
                                        <button onClick={() => handleIncreaseCart(cartItem)}
                                                className="rounded-full text-center flex items-center justify-center overflow-hidden bg-zinc-500/25 w-6 h-6 pb-1 ">
                                            <span className="font-bold">+</span>
                                        </button>
                                    </div>
                                </div>


                                    
                                
                                    
                                {/*div koji sadrži total */}       
                                <div className="w-1/5  relative">
                              
                                <button className="absolute right-5 top-0 hover:font-bold" onClick={() => handleRemoveFromCart(cartItem)}>
                                       x
                                </button>
                                <div className="razmaknut_text text-center justify-center">
                                €{cartItem.price * cartItem.cartTotalQuantity}
                                </div>
                                
                           

                                </div>

                                {/*div koji sadrži remove button */}    
                               

                          
                            </div>
                        ))}
                    </div>

                    <div className="flex">

                        <div className=" w-2/5  flex items-left pl-20">
                            <div className="obican_text ">
                            <Button className=" items-center justify-center" onClick={() => handleClearCart()} > Clear cart</Button>

                            </div>
                            
                        </div>
                        <div className="flex  w-1/5 "></div>
                        <div className="flex flex-col text-left w-2/5 obican_text">
                            
                            <div className="cart-checkout flex flex-col pt-10">
                                <div className="flex">
                                                <div className="razmaknut_text w-1/2">TOTAL COST:</div>
                                                <div className="w-1/2 text-center "> €{cart.cartTotalAmount}</div>
                                </div> 
                                <p className="obican_text text-sm pt-2">Taxes and shipping are calculated at checkout</p>
                                
                                <div className="flex items-center justify-center pt-3  gap-3">

                                    <div className="flex w-1/3">
                                    <Button onClick={() => handleNavigate("/shop")} > Continue Shopping</Button>
                                    </div>
                                    <div className="flex w-1/3">
                                    <Button   onClick={() =>  navigate("/checkout", { state: { cartData: cart.cartItems } }) } > Checkout</Button>
                            
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
        
    );
};

export default Cart;