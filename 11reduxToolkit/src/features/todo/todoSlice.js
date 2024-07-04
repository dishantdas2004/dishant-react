import {createSlice, nanoid} from "@reduxjs/toolkit"
// nanoid is almost like unique id.

const initialState = {
    todos: [{id: 1, text: "Hello"}],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

// This is the structure of a slice. 
// reducers is an object which contains methods. The methods have state and actions props.
// State is the current state of the store and action is used to pass on data.


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer