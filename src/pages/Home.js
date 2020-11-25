import { useEffect, useState } from "react";
import Container from "../components/Container";
import DataDisplay from "../components/DataDisplay"
import API from "../utils/API"
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults"
// import EmployeeContext from "../utils/EmployeeContext"

function Home () {
    const [EmployeeData, setEmployeeData] = useState([]);
    const [search, setSearch] = useState("randomuser");
    // const [image, setImage] = useState([]);
    // const [lastName, setNameLast] = useState([]);
    // const [firstName, setNameFirst] = useState([]);
    const [phone, setPhone ] = useState([]);
    // const [email, setEmail] = useState([]);
    // const [dob, setDob] = useState([]);
    const [error, setError] = useState("");
    const [displaydata, setDisplayData] = useState([]);
   useEffect(() => {
       if (!search) {
           return;
       }

    API.getUsers()
        .then(res => {
            console.log(res);
            if (res.data.length === 0) {
                throw new Error("please enter a parameter");
            }
            if (res.data.status === "error"){
                throw new Error(res.data.message);
            }
            setEmployeeData(res.data.results);
            setDisplayData(res.data.results)
            // setNameLast(res.data.results.name.last)
            // setNameFirst(res.data.results.name.first)
            setPhone(res.data.results.cell)
            // setEmail(res.data.results.email)
            // setDob(res.data.results.dob)
            console.log(phone);
            // console.log(email);


   })
   .catch (error => setError(error));
}, [search]);

const handleInputChange = event => {
    event.preventDefault()
    setSearch(event.target.value);
    setDisplayData(EmployeeSearch(search));
    
};

function EmployeeSearch(search){
// declare return array that empty that will return the results of the search
let searchData = []

searchData = EmployeeData.filter(employee => {employee.cell.contains(search)}) 
    // filter through the employeedata then compare input from the search input

return searchData
}

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
                results={displaydata} 
                // displaydata={displaydata}
                // lastName={lastName} 
                // firstName={firstName} 
                // email={email} 
                // dob={dob} 
                // phone={phone}  
                />
        </Container>
    </div>
);

};

export default Home;