import React, { useState } from "react";
import "./dropdown.css";
export default function Dropdown({ options }) {
  const [close, setColose] = useState(false);
  const [val, setVal] = useState("SELECT");
  function handleMouseEnter() {
    setColose(false);
  }
  function handleClick(e) {
    setColose(true);
    setVal(e.target.innerHTML);
  }
  return (
    <div className="container">
      <h2>Should you use dropdown ?</h2>
      <div class={`dropdown`}>
        <button class="dropbtn" onMouseEnter={handleMouseEnter}>
          {val}
        </button>
        <div class={`dropdown-content ${close && "hidden"}`}>
          {options.map((el) => (
            <p value={el} onClick={handleClick}>
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
