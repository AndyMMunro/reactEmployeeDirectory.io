import { useEffect, useState } from "react";
import Container from "../components/Container";
import DataDisplay from "../components/DataDisplay"
import API from "../utils/API"
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults"
// import EmployeeContext from "../utils/EmployeeContext"

function Home () {
    const [EmployeeData, setEmployeeData] = useState([]);
    const [search, setSearch] = useState("randomuser");
    // const [image, setImage] = useState("");
    const [lastName, setNameLast] = useState("");
    const [firstName, setNameFirst] = useState("");

    // const [phone, setPhone ] = useState("");
    // const [email, setEmail] = useState("");
    // const [dob, setDob] = useState("");
    // const [error, setError] = useState("");

   useEffect(() => {
       if (!search) {
           return;
       }

    API.getUsers(search)
        .then(res => {
            if (res.data.length === 0) {
                throw new Error("please enter a parameter");
            }
            if (res.data.status === "error"){
                throw new Error(res.data.message);
            }
            console.log(res);
            setEmployeeData(res.data.results);
            setNameLast(res.data.results.name.last)
            setNameFirst(res.data.results.name.first)


   })
   .catch (error => setError(error));
}, []);

const handleInputChange = event => {
    setSearch(event.target.value);
};


return (
    <div>
        Home
        <Container style={{ minHeight: "100vh" }}>
                <h1 className="text-center">Search Employee Info</h1>
                <SearchForm
                    handleInputChange = {handleInputChange}
                    results={search}
                    />
                <SearchResults lastName={lastName} firstName={firstName} />
                <DataDisplay results={EmployeeData} />
        </Container>
    </div>
);

};

export default Home;