import React from 'react';
import {TextField} from '@material-ui/core';

import useInputState from '../hooks/useInputState';

const EditTodoForm = ({editTodo}) => {
    const [value, handleChange, reset] = useInputState("");
    return(
        <TextField 
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        />
    );
};

export default EditTodoForm;