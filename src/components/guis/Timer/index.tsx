import Button from "@/components/Button";
import { useState } from "react";

export default function Timer() {
  const [meterValue, setMeterValue] = useState(0);

  function onRangeChange(e: React.ChangeEvent<HTMLInputElement>) {}

  function reset() {}

  return (
    <div className="flex min-w-80 flex-col gap-3">
      <div className="flex flex-row items-center gap-3">
        <span className="min-w-28">Elapsed Time: </span>
        <meter className="grow" value={meterValue} />
      </div>
      <div className="flex flex-row items-center gap-3">
        <span className="min-w-28"></span>
        <span>{meterValue}s</span>
      </div>
      <div className="flex flex-row items-center gap-3">
        <span className="min-w-28">Duration: </span>
        <input className="grow" type="range" min={0} max={3000} onChange={onRangeChange} />
      </div>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
