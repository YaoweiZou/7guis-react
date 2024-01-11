import Input from "@/components/Input";
import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  function convertCelsiusToFahrenheit(celsius: number) {
    return ((celsius * 9) / 5 + 32).toFixed(1);
  }

  function convertFahrenheitToCelsius(fahrenheit: number) {
    return (((fahrenheit - 32) * 5) / 9).toFixed(1);
  }

  function handleCelsiusChange(value: string) {
    setCelsius(value);
    const num = Number(value);
    if (Number.isNaN(num)) {
      return;
    }
    if (value.trim().length === 0) {
      setFahrenheit("");
    } else {
      setFahrenheit(convertCelsiusToFahrenheit(num).toString());
    }
  }

  function handleFahrenheitChange(value: string) {
    setFahrenheit(value);
    const num = Number(value);
    if (Number.isNaN(num)) {
      return;
    }
    if (value.trim().length === 0) {
      setCelsius("");
    } else {
      setCelsius(convertFahrenheitToCelsius(num).toString());
    }
  }

  return (
    <div className="flex flex-row gap-3">
      <Input
        type="string"
        value={celsius}
        onChange={e => handleCelsiusChange(e.target.value)}
        hasError={Number.isNaN(Number(celsius))}
      />
      <p>Celsius = </p>
      <Input
        type="string"
        value={fahrenheit}
        onChange={e => handleFahrenheitChange(e.target.value)}
        hasError={Number.isNaN(Number(fahrenheit))}
      />
      <p>Fahrenheit</p>
    </div>
  );
}
