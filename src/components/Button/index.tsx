import { ReactNode } from "react";
import classnames from "classnames";

export default function Button({
  children,
  onClick,
  disabled
}: {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={classnames("overflow-hidden px-2 border border-solid border-gray-300 rounded-md", {
        "bg-white active:bg-gray-100 active:border-blue-400": !disabled,
        "bg-gray-100 cursor-not-allowed": disabled
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
