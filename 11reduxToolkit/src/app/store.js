import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"
// we can name it anything(i.e the todoReducer)

export const store = configureStore({
    reducer: todoReducer,
})

// we have to make the store aware of the of the reducers in todoSlice