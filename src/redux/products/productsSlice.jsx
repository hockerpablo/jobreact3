import { createSlice } from '@reduxjs/toolkit'
import { productsList } from '../../data/productList'

const INITIAL_STATE = {
    products: productsList
}

export const productsSlice = createSlice ({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers:{
        getProducts: state =>{
            return state
        }
    }
})

export const { getProducts }= productsSlice.reducer

export default productsSlice.reducer