import { createSlice } from "@reduxjs/toolkit";

const initialBooks={
    books:[
        {id:1,title:"Country Road",author:"Patrick"},
        {id:2,title:"Passenger",author:"Mavrick"},
        {id:3,title:"Himu",author:"Humuyun"},
    ]
};

export const bookSlice=createSlice({
    name:"books",
    initialState:initialBooks,
    reducer:{
        showBooks:(state)=>state,
    }
});

export const {showBooks}=bookSlice.actions;
export default bookSlice.reducer;