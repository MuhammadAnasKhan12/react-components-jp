import React, { useState } from "react";

function Select({ options1 }) {
  const [Option, setOption] = useState("none");

  const change = (e) => {
    const selectedValue = e.target.value;
    setOption(selectedValue);
  };

  return (
    <div>
      <label>Select an option:</label>
      <select  value={Option} onChange={change}>
        {options1.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <p>You selected: {Option}</p>
    </div>
  );
}

export default Select;
