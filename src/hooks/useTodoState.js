import {useState} from 'react';
import {v4 as uuid} from 'uuid';

const useTodoState = (initialVal) => {
    const [todos, setTodos] = useState(initialVal);
    return {
        todos,
        addTodo: (newTodoText) => {
            setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
        },
        removeTodo: (todoId) => {
            // First we need to update the todos state. We can filter the todos
            // By using filter function and delete the one with the todoId ID.
            const updatedTodos = todos.filter((todo) => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo: (todoId) => {
            const updatedTodos = todos.map((todo)=>(
                todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            ));
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map((todo)=>(
                todo.id === todoId ? {...todo, task: newTask} : todo
            ));
            setTodos(updatedTodos);
        }
    }
};

export default useTodoState;