import React, { useState } from "react";
import "./dropdown.css";
export default function Dropdown({ options }) {
  
//   state to hold the toggle value of option list
  const [close, setColose] = useState(false);
  
//  state which stores the selected option
  const [val, setVal] = useState("SELECT");
  
// mouse hover handler
  function handleMouseEnter() {
    setColose(false);
  }
// option cliced handler
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
