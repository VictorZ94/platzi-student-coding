import React from "react";
import { type TodoId, type Todo as TodoTypes } from "../types";
import type { Todo as TodoType } from "../types.d";

interface Props extends TodoTypes {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleted({ id, completed: e.target.checked });
  };

  return (
    <div className='view'>
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({ id });
        }}
      ></button>
    </div>
  );
};
