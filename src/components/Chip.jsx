export function Chip({ isSelected = false, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={isSelected ? 'chip-selected' : 'chip'}
    >
      {children}
    </button>
  );
}
