import React ,{useState, useEffect} from 'react';
import {Paper, AppBar, Typography, Toolbar, Grid} from '@material-ui/core';
import {v4 as uuid} from 'uuid';

import TodoList from './TodoList';
import TodoForm from './TodoForm';


const TodoApp = () => {

    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    const [todos, setTodos] = useState(initialTodos);

    useEffect(()=>{
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (newTodoText) => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    };

    const removeTodo = (todoId) => {
        // First we need to update the todos state. We can filter the todos
        // By using filter function and delete the one with the todoId ID.
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const toggleTodo = (todoId) => {
        const updatedTodos = todos.map((todo)=>(
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        ));
        setTodos(updatedTodos);
    };

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map((todo)=>(
            todo.id === todoId ? {...todo, task: newTask} : todo
        ));
        setTodos(updatedTodos);
    };

    return(
        <Paper className="Paper"
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
        }}>
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography color='inherit'>TODO WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm 
                    addTodo={addTodo}
                    />
                    <TodoList 
                    todos={todos} 
                    removeTodo={removeTodo} 
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;
