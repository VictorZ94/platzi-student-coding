import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { TODO_FILTERS } from "./const";
import { type TodoTitle, type FilterValue, type Todo as TodoType, type TodoId } from "./types";

const mockTodos = [
  {
    id: "1",
    title: "Aprender react con typescript",
    completed: false
  },
  {
    id: "2",
    title: "Crear 2 proyectos más",
    completed: false
  },
  {
    id: "3",
    title: "Crear un clone de Jira Atlas.",
    completed: true
  }
];

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const handleCompleted = (
    { id, completed }: Pick<TodoType, "id" | "completed">
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        };
      }

      // eslint-disable-next-line @typescript-eslint/semi
      return todo;
    });

    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={handleTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
