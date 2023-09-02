import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CheckoutSuccess = () => {
  const { orderId } = useParams();

  // Use the orderId as needed in your component

  return (

  
      
      <>
        <Navbar/>
        <div className="content_container_normal">
        <div className="flex flex-col">
          <div className="razmaknut_text text-center justify-center" style={{ fontSize: '40px' }}> Thank you for your order!</div>
        </div>
        <div className="flex flex-col w-screen obican-text normal-case justify-left text-left p-20" style={{ fontSize: '30px' }}>
          Order number: {orderId}
        </div>
        
      
        </div>
        </>    
  );
};

export default CheckoutSuccess;
