import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import userReducer from './userSlice';
import dialogReducer from './dialogSlice';


const store = configureStore({
  reducer: {
    tasks: taskReducer,
    user: userReducer,
    dialog: dialogReducer
  },
});

export default store;
