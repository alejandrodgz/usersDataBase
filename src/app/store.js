import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/users/usersSlide";

export default configureStore({
  reducer: {
    users: userReducer,
  }
});
