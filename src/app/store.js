import {configureStore} from "@reduxjs/toolkit";
import  bookSlice  from "../features/books/BookSlice";

const store=configureStore({
    reducer:{
        booksReducer:bookSlice,
    }
});

export default store;