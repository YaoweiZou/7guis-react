import classnames from "classnames";
import { ChangeEventHandler } from "react";

export default function Input({
  type,
  value,
  onChange,
  readOnly,
  disabled,
  placeholder,
  className
}: {
  type: string;
  value: string | number | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      className={classnames(
        "px-2 border border-solid border-gray-300 outline-0 rounded-md appearance-none outline-none focus:border-blue-400",
        className,
        {
          "bg-white": !disabled,
          "bg-gray-100 cursor-not-allowed": disabled
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
