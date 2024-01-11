import { ChangeEventHandler } from "react";

export default function Select({
  options,
  onChange
}: {
  options: { value: string; label: string }[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <select
      className="overflow-hidden rounded-md border border-solid border-gray-300 bg-white px-2 py-1 focus:border-blue-400 focus:outline-none"
      onChange={onChange}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
