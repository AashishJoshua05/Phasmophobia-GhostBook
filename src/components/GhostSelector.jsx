import { useState } from "react";
import GhostName from "./GhostNameCard";
import evidences from "../assets/evidences";

const GhostSelector = () => {
  const [isSelected, setIsSelected] = useState(
    new Array(evidences.length).fill(false)
  );
  // console.log(isSelected);

  const handleOnChange = (position) => {
    const updateCheckedState = isSelected.map((evidence, index) => index === position ? !evidence : evidence)
    setIsSelected(updateCheckedState);
  }


  return (
    <div className="flex w-full justify-between">
      <div className="bg-slate-950 border-2 rounded-md h-full ">
        <ul className="flex flex-col justify-end">
          {evidences.map((name, index) => (
            <div key={index} className="p-6 bg-slate-900 text-white">
              <input type="checkbox" checked={isSelected[index]} onChange={() => handleOnChange(index)} />
              <label>{name}</label>
            </div>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <GhostName evidence={isSelected}/>
      </div>
    </div>
  );
};

export default GhostSelector;
