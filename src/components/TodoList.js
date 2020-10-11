import React from 'react';
import {Paper, List, Divider, ListItem, ListItemText} from '@material-ui/core';

const TodoList = ({todos}) => {
    return(
        <Paper>
            <List>
                {todos.map((todo) => (
                    <React.Fragment>
                        <ListItem>
                            <ListItemText>
                                {todo.task}
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                    </React.Fragment>
                    
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;