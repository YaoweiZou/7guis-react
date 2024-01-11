import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import classnames from "classnames";
import { useState } from "react";

export default function FlightBooker() {
  const selectOptions = [
    { label: "one-way flight", value: "one-way-flight" },
    { label: "return flight", value: "return-flight" }
  ];

  const [flightType, setFlightType] = useState<"one-way-flight" | "return-flight">(
    "one-way-flight"
  );
  const [startDate, setStartDate] = useState<string>("2024-01-01");
  const [returnDate, setReturnDate] = useState<string>("2024-01-01");

  function onBookClick() {
    if (flightType === "one-way-flight") {
      alert(`You have booked a one-way flight for ${startDate}`);
    } else {
      alert(`You have booked a return flight from ${startDate} to ${returnDate}`);
    }
  }

  const disabledBook =
    (flightType === "one-way-flight" && !validateDate(startDate)) ||
    (flightType === "return-flight" &&
      (!validateDate(startDate) || !validateDate(returnDate) || startDate > returnDate));

  function validateDate(date: string) {
    return (
      date.length === 10 &&
      date.match(/\b[2-9]\d{3}-[01]\d-[0-3]\d\b/) !== null &&
      new Date(date).getDate() === Number(date.slice(-2))
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Select
        options={selectOptions}
        onChange={e => {
          const selected = e.target.value as "one-way-flight" | "return-flight";
          setFlightType(selected);
          if (selected === "return-flight") {
            setReturnDate("2024-01-01");
          }
        }}
      />
      <Input
        type="text"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        placeholder="input start date"
        className={classnames({ "bg-red-300": !validateDate(startDate) })}
      />
      {flightType === "return-flight" && (
        <Input
          type="text"
          value={returnDate}
          onChange={e => setReturnDate(e.target.value)}
          placeholder="input return date"
          className={classnames({ "bg-red-300": !validateDate(returnDate) })}
        />
      )}
      <Button onClick={onBookClick} disabled={disabledBook}>
        Book
      </Button>
    </div>
  );
}
