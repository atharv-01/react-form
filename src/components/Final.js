import React from "react";
import "./final.css";
import { useLocation } from "react-router-dom";

const Final = () => {
  const location = useLocation();
  // console.log(location.state);
  const clickhandler = () => {
    alert("Your data has been saved successfully");
  };
  return (
    <div className="final">
      <div className="comp">
        <div className="finalName">Name:{location.state.id.name}</div>

        <div className="finalPan">Pan:{location.state.id.pan}</div>
        <div className="finalAadhar">Aadhar:{location.state.id.aadhar}</div>
        <button onClick={clickhandler}>Submit</button>
      </div>
    </div>
  );
};

export default Final;
