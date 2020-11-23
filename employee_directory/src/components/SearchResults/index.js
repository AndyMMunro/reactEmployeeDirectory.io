import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="emp-list">
    {props.results.map(results => (
        <li className="emp-list-img" key={results.id}>
            <img alt={results.Title} className="img.fluid" 
            src={results.picture.thumbnail.url} />
        </li>
      ))}
    </ul>
      //   <ul className="list-group search-results">
      //   <li className="list-group-item">
      //     <h2>{props.title}</h2>
      //     <a href={props.url}>{props.url}</a>
      //   </li>
      // </ul>
  );
}

export default SearchResults;

