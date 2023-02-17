

export interface TodoType {
    todo: string,
    completed: boolean,
    userId: number
}


export interface GetTodoType extends TodoType {
    id: number
}