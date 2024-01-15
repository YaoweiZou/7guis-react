import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function Timer() {
  const [rangeValue, setRangeValue] = useState(0);
  const [time, setTime] = useState(0);

  function onRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRangeValue(Number(e.target.value));
  }

  function reset() {
    setRangeValue(0);
    setTime(0);
  }

  const durationSeconds = Math.floor(rangeValue / 100);

  useEffect(() => {
    const id = setInterval(() => {
      if (time < durationSeconds) {
        setTime(lastTime => lastTime + 0.01);
      } else {
        setTime(rangeValue / 100);
      }
    }, 10);

    return () => clearInterval(id);
  }, [time, rangeValue, durationSeconds]);

  return (
    <div className="flex min-w-80 flex-col gap-3">
      <div className="flex flex-row items-center gap-3">
        <span className="min-w-28">Elapsed Time: </span>
        <meter className="grow" value={time / durationSeconds || 0} />
      </div>
      <div className="flex flex-row items-center gap-3">
        <span className="min-w-28"></span>
        <span>{time.toFixed(1)}s</span>
      </div>
      <div className="flex flex-row items-center gap-3">
        <span className="min-w-28">Duration: </span>
        <input
          className="grow"
          type="range"
          min={0}
          max={3000}
          value={rangeValue}
          onChange={onRangeChange}
        />
      </div>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
