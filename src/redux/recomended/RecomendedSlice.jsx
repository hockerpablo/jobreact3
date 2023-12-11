import { createSlice } from "@reduxjs/toolkit";
import { premiun } from '../../data/premiun'

const INITIAL_STATE = {
    recomended : Array(4).fill(0).reduce((acc, item) =>{
        const IDS = acc.map(value => value.id)
        let newRecomended;

        do{
            newRecomended={
              ...premiun[Math.floor(Math.random() * premiun.length)]
            }
        } 
        while(IDS.includes(newRecomended.id));

        return [...acc, newRecomended]
    }, [])
}


export const recomendedSlice = createSlice ({
    name: 'premiun',
    initialState: INITIAL_STATE,
    reducers: {
        randomPremiun: state=>{
            return state;
        }
    }
})

export const {randomPremiun} = recomendedSlice.reducer

export default recomendedSlice.reducer