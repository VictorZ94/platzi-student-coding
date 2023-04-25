import { useState } from "react";
import { type TodoTitle } from "../types";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    saveTodo({ title: inputValue });
    setInputValue(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='new-todo'
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="¿Qué quieres hacer?"
        autoFocus
        value={inputValue}
      />
    </form>
  );
};
