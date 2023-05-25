import React, { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown";
function App() {
  const [options, setOptions] = useState(["Yes", "probably not"]);
  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );
}

export default App;
