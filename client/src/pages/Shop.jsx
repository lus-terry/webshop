import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useGetAllProductsQuery } from "../features/productsApi";


const Shop = () => {

    const {data, error, isLoading} = useGetAllProductsQuery();

    return(

        
        <>
        <Navbar/>
        <div className="content_container">
        <div className="flex flex-wrap justify-between mx-2">

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
            <p>An error occured </p>
            ) : ( 
                <>
                <div className="flex " > 
                    {data?.map(product => 
                    <ProductCard
                    key = {product.id}
                    product = {product}
                    />
                    )}
                </div>
                </>
            )}
        

        </div>
        </div>
        </>
        
    )
};

export default Shop;