import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { darkModeContext } from "../../App";
 

export default function DarkMode() {
  const [mode, setmode] = useContext(darkModeContext);
  // const btnClass = mode
  //   ? "pl-1 pr-1 text-white shadow-lg bg-dark"
  //   : "pl-1 pr-1 text-white shadow-lg bg-dark";
  const text = mode? 'dark':'day'
  const toggleChecked = () => {
    localStorage.setItem("DarkMode", !mode);
    setmode(!mode);
  };
  console.log(localStorage.getItem("DarkMode"));
  return (
    <div className="rounded bg-dark pr-3" style={{position:'relative',top:'8px'}}><Switch checked={mode} onClick={toggleChecked} />{text}</div>
  );
}