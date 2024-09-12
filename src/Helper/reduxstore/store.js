import { configureStore } from "@reduxjs/toolkit";
import  todoSlicereducer  from "./reduxslice";
const store = configureStore({
    reducer:todoSlicereducer
});

export default store;