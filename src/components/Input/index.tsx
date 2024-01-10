export default function Input({
  type,
  value,
  onChange,
  readOnly,
  placeholder
}: {
  type: string;
  value: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  placeholder?: string;
}) {
  return (
    <input
      className="px-2 appearance-none w bg-white border border-solid border-gray-300 outline-0 rounded-md focus:border-blue-400"
      type={type}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
}
