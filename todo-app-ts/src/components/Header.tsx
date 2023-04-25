import { type TodoTitle } from "../types";
import { CreateTodo } from "./CreateTodo";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
  return (
    <header>
      <h1>Todo
        {/* <img src="" alt="Typescript logo" width={60} height={'auto'} /> */}
      </h1>
      <CreateTodo saveTodo={saveTodo}/>
    </header>

  );
};
