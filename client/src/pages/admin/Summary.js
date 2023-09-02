import { Outlet } from "react-router-dom";


const Summary = () => {



  return (
    <div className="flex flex-col ">
      
        <div className="razmaknut_text border-b border-1 pb-2">Summary</div>
     
        <Outlet/>
        
    </div>
  );
};

export default Summary;