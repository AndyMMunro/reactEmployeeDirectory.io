import Container from "../components/Container";
import SearchResults from "../components/SearchResults"
// import Header from "./components/Header";
import API from "../utils/API"
import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";

function Home () {
    const [search, setSearch] = useState("RandomUser");
    const [image, setImage] = useState("");
    // const [name, setName] = useState("");
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
            setImage(res.data.results.picture.thumbnail.url)
   })
//    .catch (err => setError(err));
}, [search]);

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
        <SearchResults 
            image={image} 
            />
        {/* <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td 
                    className="emp-list">
                        {results.map(results => (
                            <li className="emp-list-img" key={results.id}>
                                <img alt={results.Title} className="img.fluid" 
                                src={results.picture.thumbnail.url} />
                            </li>
                        ))}
                    </td>
                    <td>image</td>
                    <td>name</td>
                    <td>phone</td>
                    <td>email</td>
                    <td>DOB</td>
                </tr>
            </tbody>
        </table> */}
        </Container>
    </div>
);

};

export default Home;