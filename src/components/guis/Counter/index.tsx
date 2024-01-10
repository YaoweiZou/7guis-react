import Button from "@/components/Button";
import Window from "@/components/Window";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count => count + 1);
  }

  return (
    <div className="inline-block my-6">
      <Window title="Counter">
        <div className="flex flex-row gap-2">
          <input
            className="px-2 appearance-none w bg-white border border-solid border-gray-300 outline-0 rounded-md"
            type="text"
            value={count}
            readOnly
          />
          <Button onClick={increment}>Count</Button>
        </div>
      </Window>
    </div>
  );
}
