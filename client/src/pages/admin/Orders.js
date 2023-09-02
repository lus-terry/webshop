import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from '../../features/CheckoutSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.checkout.orders);
  const fetchStatus = useSelector((state) => state.checkout.fetchStatus);

  useEffect(() => {
    if (fetchStatus === 'idle') {
      dispatch(fetchAllOrders());
    }
  }, [fetchStatus, dispatch]);



  return (
    <div className="flex flex-col">
      <div className="razmaknut_text border-b border-1 pb-2">Orders</div>
      <div className="items-center justify-center">

      {fetchStatus === 'pending' && <p>Dohvaćam narudžbe...</p>}
      {fetchStatus === 'rejected' && <p>Neuspješno dohvaćanje narudžbi. Pokušajte ponovno.</p>}
      {orders.length === 0 && fetchStatus === 'success' && <p>Nema dostupnih narudžbi.</p>}
      {orders.length > 0 && (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <strong>ID narudžbe:</strong> {order._id}<br />
              <strong>Korisnik:</strong> {order.user}<br />
              {/* Dodajte ostale informacije o narudžbi prema vašim potrebama */}
            </li>
          ))}
        </ul>
      )}

      </div>
    </div>
  );
};

export default Orders;
