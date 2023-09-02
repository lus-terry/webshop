import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Shop = () => {

    //const {data, error, isLoading} = useGetAllProductsQuery();
    const {items:data, status} = useSelector((state) => state.products);

    return (
        <>
        <Navbar/>
        <div className="content_container">
        <div className="flex flex-wrap justify-between mx-2">
            {status === "success" ? (
                <>
                <div className="flex"> 
                        {data && 
                        data?.map((product) =>( 
                        <ProductCard
                        key = {product._id}
                        product = {product}
                        />
                        ))}
                </div>
                </>
            ): status === "pending" ? (
        <p>Loading...</p>
        ) : (
            <p>Unexpected error occured...</p>
        )}
            
        </div>
        </div>
        </>     
    );
};

export default Shop;