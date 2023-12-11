import React from "react";
import { categories } from "../../data/categories";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    categories: categories

} 


export const categoriesSlice = createSlice ({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        getCategories: state =>{
            return state;
        }
    }
})

export const{ getCategories } = categoriesSlice.reducer

export default categoriesSlice.reducer