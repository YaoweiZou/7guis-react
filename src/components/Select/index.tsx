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
      className="overflow-hidden py-1 px-2 bg-white border border-solid border-gray-300 rounded-md focus:border-blue-400 focus:outline-none"
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
