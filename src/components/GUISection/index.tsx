import Window from "@/components/Window";
import { ReactNode } from "react";

export default function GUISection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-5">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="inline-block my-6">
        <Window title={title}>{children}</Window>
      </div>
    </section>
  );
}
