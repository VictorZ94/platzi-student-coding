import { type FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  onClearCompleted,
  completedCount = 0,
  filterSelected,
  handleFilterChange
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {
        completedCount > 0 && (
          <button
            className='clear-completed'
            onClick={onClearCompleted}
          >
            Borrar completadas
          </button>
        )
      }

    </footer>
  );
};
