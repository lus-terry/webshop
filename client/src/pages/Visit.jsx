import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Contact = () => {


    return (
        <>
        <Navbar/>
        <div className="content_container_normal items-center justify-center">
        
        <div className="child_div flex flex-col gap-1 obican_text normal-case text-left items-left pb-5  " style={{height: '350px' }}>
       
                <div className=" razmaknut_text uppercase custom-bg-color text-left pb-5 text-2xl">
                     Visit us
                </div>
                <div className="text-left ">    
                        Turčinovići 81, Sv. Petar u Šumi 52404
                    <br/>
                    
                    How to find us?   
                    <br/>
                    <div className="text-center">
                        <Link className="underline uppercase " href={"https://www.google.hr/maps/dir/''/in+sylvis+vina/@45.1835567,13.7906343,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x477cb04e3446e4d9:0x702e92e3308b55d5!2m2!1d13.8730349!2d45.1835863?entry=ttu"} target="_blank" rel="noopener noreferrer">Click to get directions</Link>
                    </div>
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