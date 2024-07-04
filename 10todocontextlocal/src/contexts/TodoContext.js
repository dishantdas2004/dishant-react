import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// createContext is a function which take an object in which we can pass all the things which we want to have context of
// We can pass all the data, fields in the object

// Here the object we are passing in the todos key is just for example.
// Normally when we write it, we can just give an empty array.

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider