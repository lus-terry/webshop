  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
  import { BrowserRouter } from 'react-router-dom';
  import "react-toastify/dist/ReactToastify.css";
  import { ToastContainer } from "react-toastify";
  import { configureStore} from '@reduxjs/toolkit';
  import { Provider } from 'react-redux';
  import productsReducer, { productsFetch } from './features/productSlice';
  import { productsApi } from './features/productsApi';
  import cartReducer, { getTotals } from './features/cartSlice';

  const store = configureStore( {
    reducer: {
      products: productsReducer,
      cart: cartReducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>  
      getDefaultMiddleware().concat(productsApi.middleware),
  });

  store.dispatch(productsFetch());
  store.dispatch(getTotals());

  const root = ReactDOM.createRoot(document.getElementById('root'));  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <ToastContainer/>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );


