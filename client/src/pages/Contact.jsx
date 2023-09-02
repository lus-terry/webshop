import Navbar from "../components/Navbar";

const Contact = () => {


    return (
        <>
        <Navbar/>
        <div className="content_container_normal items-center justify-center">
        
        <div className="child_div flex flex-col gap-1 obican_text normal-case text-left items-left pb-5  " style={{height: '350px' }}>
       
                <div className=" razmaknut_text uppercase custom-bg-color text-left pb-5 text-2xl">
                     CONTACT
                </div>
                <div className="text-left ">    
                      
                            <br/>
                    insylvisvina@gmail.com
                    <br/>
                    
                    <div className="flex "> 
                    GSM:
                    <a href="tel:+385989475313">+385 98 9475 313</a> /{" "}
                    <a href="tel:+385998744262">+385 99 8744 262</a> 
                    </div>
       
                </div>
    
        </div>
        </div>
        </>     
    );
};

export default Contact;