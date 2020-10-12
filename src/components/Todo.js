import React from 'react';
import {ListItemText, ListItem, Checkbox, IconButton, ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

const Todo = ({id, task, completed, removeTodo, toggleTodo, editTodo}) => {
    const [isEditing, toggle] = useToggleState(false);

    return(
        <ListItem>
            {isEditing? (<EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle}/> ) : (
                <>
                <Checkbox onClick={()=>toggleTodo(id)} checked={completed}/>
                <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={() => toggle()}>
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </>
            )}
        </ListItem>
    );
};

export default Todo;