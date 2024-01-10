import { ReactNode } from "react";

export default function Window({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden flex flex-col border border-solid border-gray-300 rounded-xl shadow-lg">
      <div className="flex flex-col justify-center h-7 px-3 bg-gray-50 border-b border-solid border-gray-300 select-none">
        <h1 className="text-sm font-normal text-center">{title}</h1>
      </div>
      <div className="p-3 bg-white">{children}</div>
    </div>
  );
}
