import classnames from "classnames";
import { ChangeEventHandler } from "react";

export default function Input({
  type,
  value,
  onChange,
  readOnly,
  disabled,
  placeholder,
  hasError
}: {
  type: string;
  value: string | number | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  hasError?: boolean;
}) {
  return (
    <input
      className={classnames(
        "px-2 border border-solid border-gray-300 outline-0 rounded-md appearance-none outline-none focus:border-blue-400",
        {
          "bg-white": (!disabled && !hasError),
          "bg-gray-100 cursor-not-allowed": disabled,
          "bg-red-300": hasError
        }
      )}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
}
