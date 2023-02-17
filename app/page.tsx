"use client";

import { useState, useEffect } from 'react'
import { TodoList, CreateTodoForm } from "@/components";
import { Box, Container, Typography, Fab, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { getAllTodosApi, updateTodoApi, deleteTodoApi, createTodoApi} from '../service/todoApis'

export default function Home() {
  const [todos, setTodos] = useState([])


  const getTodos = async () => {
    try {
      const {todos} = await getAllTodosApi()
      console.log({todos})
      setTodos(todos)
    } catch (error) {
      console.log(error)
    }
  }

  const createTodo = async (t: string) => {
    try {
      const newTodos = [...todos]
      const data = await createTodoApi({todo: t, completed: false, userId: 5})
      newTodos.unshift(data)
      setTodos(newTodos)
    } catch (error) {
      console.log(error)
    }
  }


  const updateTodo = async (id: number, completed: boolean) => {
    try {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(todo => todo.id === id)
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed
      setTodos(newTodos)
      await updateTodoApi(id, completed)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      let newTodos = todos.filter(todo => todo.id != id)
      setTodos(newTodos)
      await deleteTodoApi(id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( () => {
    getTodos()
  }, [])


  return (
    <Container sx={{ mx: 'auto'}}>
      <Typography variant="h2" sx={{ mb: 4, fontSize: '40px', fontWeight: 700}}>
        Todo List
      </Typography>
 
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
             {todos?.length > 0 ? <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}  />:
              <Typography variant="body1" sx={{ fontSize: '24px', textAlign: 'center', fontWeight: 500}}>
              No Todo at the moment
            </Typography>
             }
          </Grid>
          <Grid item xs={12} md={5}>
              <CreateTodoForm createTodo={createTodo}   />
          </Grid>
      </Grid>     
    </Container>
  );
}
