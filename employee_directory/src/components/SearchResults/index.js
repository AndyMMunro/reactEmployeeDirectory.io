import React from "react";
import "./style.css";
import Moment from 'react-moment';

function SearchResults(props) {
  return(
    <div>
      <table className="emp-list" >
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
        <tbody>
          {props.results.map(results => (
            <tr className="employee-data" >
                <td className="emp-list-img" key={results.id}>
                  <img alt={results.title} className="img.fluid" src={results.picture.medium} />
                </td>    
                <td className="emp-list-name" key={results.id}>
                  <p>{results.name.first} {results.name.last}</p>
                </td>
                <td className="emp-list-phone" key={results.id}>
                  <p>{results.cell}</p>
                </td> 
                <td className="emp-list-email" key={results.id}>
                  <p>{results.email}</p>
                </td> 
                <td className="emp-list-bday" key={results.id}>
                  <Moment date={results.dob.date} format= "MM/DD/YYYY"/>
                </td>                                       
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;