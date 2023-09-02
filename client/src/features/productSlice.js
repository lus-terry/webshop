import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    items: [],
    status: null,
    error: null,
    createStatus: null,
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async(_id=null, {rejectWithValue}) => {
        try{ 
            const response = await axios.get("http://localhost:4000/products")
            return response?.data //ovaj upitnik znaci da ako data ne postoji vrati error
        }catch(error) {
            return rejectWithValue("an error occured");
        }

    }
)

export const productsCreate = createAsyncThunk(
    "products/productsCreate",
    //accepting from create product form
    async(values) => {
        try{ 
            const response = await axios.post("http://localhost:4000/products", values)
            return response?.data //ovaj upitnik znaci da ako data ne postoji vrati error
        }catch(error) {
            console.log("tu je neki error");
        }

    }
)


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        [productsCreate.pending]: (state, action) => {
            state.createStatus = "pending";
        },
        [productsCreate.fulfilled]: (state, action) => {
            state.createStatus = "success";
            state.items.push(action.payload);
            toast.success("Product created.")
        },
        [productsCreate.rejected]: (state, action) => {
            state.createStatus = "rejected";
            state.error = action.payload;
        }
    }
})

export default productsSlice.reducer;