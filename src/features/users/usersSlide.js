import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("/users/getUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState:{
    users:[],
    status:'idle',
    error: null,
},
  reducers: {
    addUser:(state, action)=>{
      state.users.push({...action.payload, id: nanoid()})
    },
    editUser:(state, action)=>{
      const {id, name, username, email, company, address, phone, website} = action.payload
      const userEdit = state.users.find(user => user.id == id)
      if(userEdit){
        userEdit.name = name
        userEdit.username = username
        userEdit.email = email
        userEdit.company = company
        userEdit.address = address
        userEdit.phone = phone
        userEdit.website = website
      } 
    }
  },
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    }).addCase(getUsers.pending,(state,action)=>{
      state.status = 'loading';
    }).addCase(getUsers.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });;
  },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;
