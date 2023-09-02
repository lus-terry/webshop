import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    orders: [], // Ovdje postavite početno prazno polje za narudžbe
    createStatus: 'idle',
    error: null,
    generatedId: null,
  };

// Define createOrder async action using createAsyncThunk
export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (orderData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:4000/orders', orderData);


      console.log("order id", response.data.id)
     
      return response.data.id;



    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Define fetchOrder async action using createAsyncThunk
export const fetchOrder = createAsyncThunk(
    'orders/fetchOrder',
    async (orderId, thunkAPI) => {
      try {
        const response = await axios.get(`http://localhost:4000/orders/${orderId}`);
        console.log(response.data)
        return response.data;
      } catch (error) {
        console.log("problemcic")
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  export const fetchAllOrders = createAsyncThunk(
    'orders/fetchAllOrders',
    async (_, thunkAPI) => { // Ne trebate proslijeđivati orderId
      try {
        const response = await axios.get('http://localhost:4000/orders');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );



// Define the initial state


// Create a slice of the Redux store
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.createStatus = "pending";
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.createStatus = "success";
        state.generatedId = action.payload;// Postavite generatedId iz odgovora
        toast.success("Order created.");
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.createStatus = "rejected";
        state.error = action.payload;
        toast.error("Failed to create order.");
      })

      .addCase(fetchOrder.pending, (state) => {
        // Postavite odgovarajući status za dohvaćanje narudžbe
        // Npr. state.fetchStatus = "pending";
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        // Ovdje postavite podatke o dohvaćenoj narudžbi u Redux stanje
        // Npr. state.selectedOrder = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        // Obrada greške ako dohvaćanje narudžbe nije uspjelo
        // Npr. state.fetchStatus = "rejected";
        // state.error = action.payload;
      })
      .addCase(fetchAllOrders.pending, (state) => {
        state.fetchStatus = "pending";
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.fetchStatus = "success";
        state.orders = action.payload; // Ažurirajte polje orders sa dohvaćenim podacima
        toast.success("Orders fetched.");
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.fetchStatus = "rejected";
        state.error = action.payload;
        toast.error("Failed to fetch orders.");
      });

  },
});

export default checkoutSlice.reducer;
