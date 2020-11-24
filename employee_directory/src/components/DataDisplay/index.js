import React from "react";
import "./style.css";

function DataDisplay(props) {
  
  return (
    <ul className="emp-list">
    {props.results.map(results => (
        <li className="emp-list-img" key={results.id}>
            <img alt={results.Title} className="img.fluid" 
            src={results.data} />
        </li>
      ))}
    </ul>
   
  );
}

export default DataDisplay;

