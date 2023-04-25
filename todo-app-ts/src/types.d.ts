import { type TODO_FILTERS } from "./const";

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, "id">
export type TodoTitle = Pick<Todo, "title">
export type TodoCompleted = Pick<Todo, "completed">

// SOn equivalente
// export type TodoId = Omit<Todo, 'title' | 'completed'>
// export type TodoTitle = Omit<Todo, 'id' | 'completed' >
// export type TodoCompleted = Omit<Todo, 'id' | 'title'>

// ambas formas son equivalentes
// type ListOfTodos = Array<Todo>
export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
