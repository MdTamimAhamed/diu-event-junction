import {  createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    userDetails :[{
        id:'',
        firstName:'Tamim',
        lastName:'Hello world',
        email:'',
        token:'',
    }]
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state, action)=>{
            const userList = {
                id:nanoid(),
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                email:action.payload.email,
                token:action.payload.token,
            }
            state.userDetails  = [userList]
        },

        clearUser:(state, action)=>{
            state.userDetails = state.userDetails.filter((item)=> item.id != action.payload)
        }
    }
})

export const {setUser, clearUser} = userSlice.actions
export default userSlice.reducer