import {createSlice} from "@reduxjs/toolkit"

const initialState={
    user:null,
    isRegister:false
};
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
            state.isRegister=true;
        },
        logout:(state,action)=>{
            state.user=action.payload,
            state.isRegister=false
        }
        
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
