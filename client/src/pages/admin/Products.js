import { Outlet, useNavigate } from "react-router-dom";
import "../../index.css"
import { Button } from "semantic-ui-react";


const Products = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col left-20 "style={{ maxWidth: '600x'}} >
      
        <div className="admin_naslov razmaknut_text border-b border-1  ">Products</div>
          <div className="p-5 w-full">
              <Button onClick={() => navigate("/admin/products/create-product")}>
                Create
              </Button>
              <Outlet/>
          </div>
    
        </div>
  );
};

export default Products;