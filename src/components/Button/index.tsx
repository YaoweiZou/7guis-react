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
      className={classnames("overflow-hidden rounded-md border border-solid border-gray-300 px-2", {
        "bg-white active:border-blue-400 active:bg-gray-100": !disabled,
        "cursor-not-allowed bg-gray-100": disabled
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
