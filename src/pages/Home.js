import React from "react";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import DataDisplay from "../components/DataDisplay";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";


function Home () {
    const [EmployeeData, setEmployeeData] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [DisplayData, setDisplayData] = useState([]);

    // console.log(setEmployeeData, "testing emp data");

   useEffect(() => {
    //    if nothing in search parameter then populate all users
       if (!search) {
           return API.getUsers()
           .then(res => {

               console.log(res);

               if (res.data.length === 0) {
                   throw new Error("please enter a parameter");
                }
                if (res.data.status === "error"){
                    throw new Error(res.data.message);
                }
                setEmployeeData(res.data.results);
                setDisplayData(res.data.results);
                // setSortByfirstName(res.data.results.name.first)
            })
            .catch (error => setError(error));
        }else{
            // if there is input in the search bar trigger employee search
            EmployeeSearch(search)
        }
        // searches as you enter letters or numbers into search parameter.
        }, [search]);

const handleInputChange = event => {
    event.preventDefault()
    setSearch(event.target.value);
    // displays the searched for data 
    setDisplayData(EmployeeSearch(search));
    
};

function EmployeeSearch(search){
// sets employee data to search data after it is filtered
let searchData = []

searchData = EmployeeData.filter(employee =>
    employee.name.first.toLowerCase().includes(search))  
    
    return searchData;

}
let direction = "ascending" ;

const handleInputSort = event => {

    console.log("please sort me");

    const temp = DisplayData.sort(sorter);
    
    setDisplayData([...temp]);
    if(direction = "ascending") {
        direction = "descending"
    } else if ( direction = "descending") {
            direction = "ascending"
    } 
    

    console.log("sorted data", temp);
  };

  function sorter(a, b){

    if(a.name.first < b.name.first)
        return direction === "ascending" ? -1 : 1;

    else if (a.name.first > b.name.first)
        return direction === "ascending" ? 1 : -1;
  }

//   const handleInputSortReverse = event => {

//     console.log("please sort me");

//     const temp = DisplayData.sort(sorterReverse);
    
//     setDisplayData([...temp]);
//     if(direction = "descending") {
//         direction = "ascending"
//     } else if ( direction = "ascending") {
//         direction = "descending"
//     } 
    

//     console.log("sorted data", temp);
//   };
//   function sorterReverse(a, b){

//     if(a.name.first > b.name.first)
//         return direction === "ascending" ? 1 : -1;

//     else if (a.name.first < b.name.first)
//         return direction === "ascending" ? -1 : 1;
//   }

return (
    <div>
        Home
        <Container style={{ minHeight: "100vh" }}>
                <h1 className="text-center">Search Employee Info</h1>
                <SearchForm
                    handleInputChange = {handleInputChange}
                    results={search}
                    />
                    {error}
                <DataDisplay 
                // handleInputSortReverse = {handleInputSortReverse}
                handleInputSort = {handleInputSort}
                results={DisplayData} 
                />
        </Container>
    </div>
);

};

export default Home;