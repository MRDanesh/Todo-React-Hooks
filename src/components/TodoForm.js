import React from 'react';
import {TextField, Paper} from '@material-ui/core';

import useInputState from '../hooks/useInputState';

const TodoForm = ({addTodo}) => {
    const [value, handleChange, reset] = useInputState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        reset();
    };

    return(
        <Paper>
            <form onSubmit={onFormSubmit}>
                <TextField value={value} onChange={handleChange} />
            </form>
        </Paper>
    );
}

export default TodoForm;