import { Outlet } from "react-router-dom";


const Users = () => {



  return (
    <div className="flex flex-col ">
      
        <div className="razmaknut_text border-b border-1 pb-2">Users</div>
     
        <Outlet/>
        
    </div>
  );
};

export default Users;