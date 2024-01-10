import { ReactNode } from "react";

export default function Button({
  children,
  onClick
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="overflow-hidden px-3 bg-white border border-solid border-gray-300 rounded-md active:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
