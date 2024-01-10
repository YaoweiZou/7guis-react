import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count => count + 1);
  }

  return (
    <div className="flex flex-row gap-3">
      <Input type="text" value={count} readOnly />
      <Button onClick={increment}>Count</Button>
    </div>
  );
}
