import React from "react";
import "./style.css";
// import Moment from 'react-moment';

function SearchResults(props) {
  return(
    <div>
      <table className="emp-list" >
        {/* <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead> */}
        <tbody>
          {/* {props.results.map(results => ( */}
            <tr className="employee-data" >
                {/* <td className="emp-list-img" >
                  <img alt={results.title} className="img.fluid" src={results.picture.medium} />
                </td>     */}
                {/* <td className="emp-list-name" >
                  <p>{results.name.first} {results.name.last}</p>
                </td> */}
                <td className="emp-list-phone" >
                  <p>{props.cell}</p>
                </td> 
                {/* <td className="emp-list-email" >
                  <p>{results.email}</p>
                </td>  */}
                {/* <td className="emp-list-bday">
                  <Moment date={results.dob.date} format= "MM/DD/YYYY"/>
                </td>                                        */}
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;