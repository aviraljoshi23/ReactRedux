import { createSlice } from "@reduxjs/toolkit";
import { data } from "./dummyJson";
const masterSlice =  createSlice({
    name:"master",
    initialState:{
        value:{
            data :data
        }
    },
    reducers:{
        remove:(state,action)=>{
            let  index =   action.payload;
            state.value.data.splice(index,1);
        },
        add :(state,action)=>{
            console.log(action.payload);
            state.value.data.push(action.payload);
        }

    }
})
export const { remove,add } =  masterSlice.actions;
export default masterSlice.reducer;