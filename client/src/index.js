  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
  import { BrowserRouter } from 'react-router-dom';
  import "react-toastify/dist/ReactToastify.css";

  import { configureStore} from '@reduxjs/toolkit';
  import { Provider } from 'react-redux';

  import productsReducer, { productsFetch } from './features/productSlice';
  import { productsApi } from './features/productsApi';

  const store = configureStore( {
    reducer: {
      products: productsReducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(productsApi.middleware),
  });

  store.dispatch(productsFetch());

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );


