import { createSlice } from "@reduxjs/toolkit";
import { initialstate } from "./rootStore";


const UserSlice = createSlice({
    name:'user',
    initialState:initialstate.userData,
    reducers:{
        Profile:(state)=>{
            return{
                ...state,
                userData:action.payload
            }
        }
    }
})

export const {Profile} =UserSlice.actions;
export default UserSlice.reducer;