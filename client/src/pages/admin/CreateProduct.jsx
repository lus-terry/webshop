import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { productsCreate } from "../../features/productSlice";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const { createStatus } = useSelector((state) => state.products);

    const [productImg, setProductImg] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    console.log(productImg);

    const handleProductImageUpload = (e) =>{
        const file = e.target.files[0];

        console.log(file);

        TransformFile(file);
    };



    const TransformFile = (file) => {

        /*
        Base64 is a method for encoding binary data into ASCII text. 
        In the context of web development, 
        Base64 images refer to images that have been encoded as a Base64 string. 
        This string can be embedded directly into the HTML code 
        of a web page and displayed as an image, 
        without the need for separate image files.
        */
        const reader = new FileReader()

        if(file) {
            reader.readAsDataURL(file);
            //once its completed:
            reader.onloadend = () => {
                setProductImg(reader.result);
            };
        } else {
            setProductImg("")
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(productsCreate({
            name,
            price,
            desc,
            image:productImg

        }))
    }

    return (
    <div className="flex items-center">
        <div className="flex flex-col">
            <div className="razmaknut_text pt-10 pb-5">
            Create a Product:
            </div>

            <form className="flex flex-col" onSubmit={handleSubmit}>

                {/*image divs*/}
                <div className="flex  items-center justify-center pt-3  gap-3">
                    <div className="  flex items-center justify-center   " style={{ height: '250px', width: '250px' }} >
                    
                    <label className="input_button ">
                        <input
                            type="file" 
                            accept="image/*" 
                            onChange={handleProductImageUpload}
                            style={{ display: 'none' }}
                            required
                        />
                        Choose File
                    </label>
                    
                    </div>

                    <div className=" flex items-center justify-center border-gray-200 border-2">
                        {productImg ? (
                        <div >
                            <img  style={{ height: '250px', width: '250px' }} src={productImg} alt="product image" className="w-full h-full object-cover" />
                        </div>
                        ) : (
                        <div  className="razmaknut_text justify-center items-center flex flex-col" style={{ height: '250px', width: '250px' }}>
                            Image preview will appear here
                        </div>
                        )}
                    </div>
                </div>

                {/*image divs*/}
                <div className="flex  items-center justify-center pt-3  gap-3">
                    <div className="razmaknut_text  flex flex-col items-left text-left pl-2 justify-center gap-2 " style={{ height: '500px', width: '515px' }}  >
                    
                        name:
                        <input
                            className="input"
                            type="text" 
                            required 
                            placeholder=""
                            onChange={(e) => setName(e.target.value)}
                        
                        />
                        price:
                        <input
                            className="input"
                            type="text" 
                            required 
                            placeholder="€  0.00"
                            onChange={(e) => setPrice(e.target.value)}
                        
                        />
                        description:
                        <input
                            style={{ height: '250px' }}
                            className="input" 
                            type="text" 
                            required 
                            placeholder=""
                            onChange={(e) => setDesc(e.target.value)}
                        
                        />
             
                       
              
                    
                    </div>

                    
                </div>
                
                <div className="items-center">
                <Button type="submit" >
                    Submit
                </Button>
                </div>


            <div>

            </div>
        
        </form>

     </div>
    </div>

    );
}

export default CreateProduct;