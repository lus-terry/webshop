import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useGetAllProductsQuery } from "../features/productsApi";


const Wines = () => {

    const {data, error, isLoading} = useGetAllProductsQuery();

    return(

        
        <div >
        <Navbar/>
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
                    key={product.id}
                    name={product.name}
                    desc={product.desc}
                    price={product.price}
                    image={product.image}
                    />
                )}
                </div>
                </>
            )}
        

        </div>
        </div>
        
    )
};

export default Wines;