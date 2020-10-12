import React from 'react';
import {TextField} from '@material-ui/core';

import useInputState from '../hooks/useInputState';

const EditTodoForm = ({editTodo, id, task, toggle}) => {
    const [value, handleChange, reset] = useInputState(task);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
    }

    return(
        <form 
        onSubmit={handleFormSubmit}
        style={{marginLeft: "1rem", width:"50%"}}
        >
            <TextField 
            margin='normal'
            value={value}
            onChange={handleChange}
            fullWidth
            autoFocus
            />
        </form>
        
    );
};

export default EditTodoForm;