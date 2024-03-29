import Window from "@/components/Window";
import React from "react";

export default function GUISection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-5">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="my-6 inline-block">
        <Window title={title}>{children}</Window>
      </div>
    </section>
  );
}
