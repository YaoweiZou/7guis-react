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
        "appearance-none rounded-md border border-solid border-gray-300 px-2 outline-none outline-0",
        {
          "bg-white focus:border-blue-400": !disabled && !hasError,
          "cursor-not-allowed bg-gray-100": disabled,
          "bg-red-300 focus:border-red-400": hasError
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
