import { Chip } from '../components/Chip.jsx';

export function SpecialtyPills({ label, options, selectedId, onSelect }) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="input-label mb-2">{label} *</legend>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => (
          <Chip
            key={option.id}
            isSelected={selectedId === option.id}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </Chip>
        ))}
      </div>
    </fieldset>
  );
}
