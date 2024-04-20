import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/searchBar/SearchBar";
import SearchBarResult from "./Components/searchBarResult/SearchBarResult";

function App() {
    const [results, setResults] = useState([]);
    return (
        <div className="App">
            <div className="container-search-bar">
                <SearchBar setResults = {setResults}/>
                <SearchBarResult results = {results}/>
            </div>
        </div>
    );
}

export default App;
