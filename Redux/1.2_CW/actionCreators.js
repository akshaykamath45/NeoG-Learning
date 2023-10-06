export const ADD_TODO = "todos/added";
export const REMOVE_TODO = "todos/removed";
const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
});

const removeTodo = (index) => ({
    type: REMOVE_TODO,
    payload: index
});
