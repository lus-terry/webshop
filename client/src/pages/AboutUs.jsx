import Navbar from "../components/Navbar";
import text from "../components/Texts";

const AboutUs = () => {


    return (
        <>
        <Navbar/>
        <div className="content_container_normal" > 
        
        <div className="flex flex-col w-3/5 p-10" >
        <div className="razmaknuti_text custom-bg-color pb-5 text-center " >ABOUT US</div>
        
            <div className=" pb-5 obican_text custom-bg-color normal-case " >
              {text.aboutUsFull1 }
              <br/>
              <br/>
              {text.aboutUsFull2 }
              <br/>
              <br/>
              {text.aboutUsFull3 }
              <br/>
              <br/>
              {text.aboutUsFull4 }
              <br/>
              <br/>

            </div>

            <img
            className="h-100  object-cover"
            src="https://res.cloudinary.com/lus-terry/image/upload/v1693072361/275790152_699286514831796_230813501338605570_n_oys7n8.jpg"
            alt="aboutUs"
          />
        </div>
            
          
        </div>
          
          
          
     
          
          
     
        </>     
    );
};

export default AboutUs;