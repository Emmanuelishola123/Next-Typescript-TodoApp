import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { GetTodoType } from '../interfaces'


export default function TodoList({todos, updateTodo, deleteTodo}) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (id: number, completed: boolean) => {
    updateTodo(id, completed)
    // const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];

    // if (currentIndex === -1) {
    //   newChecked.push(value);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }

    // setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" sx={{color: 'red'}} onClick={() => deleteTodo(todo.id)} >
                <DeleteOutlinedIcon  />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => updateTodo(todo.id, todo.completed)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={todo.todo} sx={{color: todo.completed ? '#b2b2b2' : undefined}} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
