import {TodoType, GetTodoType} from '../interfaces'

const TODO_API = 'https://dummyjson.com'

export const createTodoApi = async (data: TodoType) => {
    const response = await fetch(`${TODO_API}/todos/add`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });

      return response.json();
}

export const getAllTodosApi = async (limit: number = 10, skip: number = 0): Promise<GetTodoType[]> => {
    const response = await fetch(`${TODO_API}/todos?limit=${limit}&skip=${skip}`);
    return response.json();
}

export const updateTodoApi = async (id: number, completed: boolean) => {
    const response = await fetch(`${TODO_API}/todos/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({'completed': completed}),
    });
    return response.json();
}


export const deleteTodoApi = async (id: number) => {
    const response = await fetch(`${TODO_API}/todos/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }