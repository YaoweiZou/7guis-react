import { ReactNode } from "react";

export default function Window({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-solid border-gray-300 shadow-lg">
      <div className="flex h-7 select-none flex-col justify-center border-b border-solid border-gray-300 bg-gray-50 px-3">
        <h1 className="text-center text-sm font-semibold">{title}</h1>
      </div>
      <div className="bg-white p-3">{children}</div>
    </div>
  );
}
