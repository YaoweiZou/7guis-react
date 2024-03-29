import Button from "@/components/Button";
import Input from "@/components/Input";
import { ChangeEvent, useState } from "react";

type Data = {
  id: number;
  firstName: string;
  lastName: string;
};

const defaultDataList = [
  {
    id: 0,
    firstName: "Elon",
    lastName: "Musk"
  },
  {
    id: 1,
    firstName: "Joanne",
    lastName: "Rowling"
  }
];

export default function CRUD() {
  const [filterInput, setFilterInput] = useState("");
  const [dataList, setDataList] = useState<Data[]>(defaultDataList);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selected, setSelected] = useState<number>();

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedId = Number(e.target.value);
    const index = dataList.findIndex(data => data.id === selectedId);
    const selectedData = dataList[index];
    setSelected(selectedId);
    setFirstName(selectedData.firstName);
    setLastName(selectedData.lastName);
  }

  function handleCreate() {
    if (firstName || lastName) {
      setDataList(dataList => [
        ...dataList,
        { id: Math.floor(Math.random() * 100000), firstName, lastName }
      ]);
    } else {
      setDataList(dataList => [
        ...dataList,
        { id: Math.floor(Math.random() * 100000), firstName: "newBlankItem", lastName }
      ]);
    }
    setFirstName("");
    setLastName("");
  }

  function handleUpdate() {
    setDataList(dataList =>
      dataList.map(data => (data.id === selected ? { ...data, firstName, lastName } : data))
    );
  }

  function handleDelete() {
    setDataList(dataList => dataList.filter(data => data.id !== selected));
    setFirstName("");
    setLastName("");
  }

  return (
    <div>
      <div>
        <span className="mr-2">Filter last name:</span>
        <Input type="text" value={filterInput} onChange={e => setFilterInput(e.target.value)} />
      </div>
      <div className="my-4 flex flex-row gap-3">
        <select
          className="h-20 w-64 appearance-auto overflow-y-auto border border-solid border-gray-300"
          size={2}
          onChange={onSelectChange}
        >
          {dataList
            .filter(data => data.lastName.toLowerCase().includes(filterInput.toLowerCase()))
            .map(({ id, firstName, lastName }) => (
              <option key={id} className="px-2" value={id}>
                {firstName} {lastName}
              </option>
            ))}
        </select>
        <div>
          <div className="py-1">
            <span className="mr-2">First name:</span>
            <Input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="py-1">
            <span className="mr-2">Last name:</span>
            <Input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3">
          <Button onClick={handleCreate}>Create</Button>
          <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
        <div>
          <span className="text-gray-300">{dataList.length}</span>
        </div>
      </div>
    </div>
  );
}
