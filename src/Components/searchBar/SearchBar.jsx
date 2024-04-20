import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ setResults }) {
    const [input, setInput] = useState("");
    const fetchValue = function (value) {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((json) => {
                console.log(json.users);
                const results = json.users.filter((user) => {
                    const fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;
                    return fullName.includes(value.toLowerCase());
                });
                setResults(results); // Update the state with the filtered results
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    };    

    const handleChange = function (val) {
        setInput(val);
        fetchValue(val);
    };
    return (
        <div className="input-container">
            <FaSearch id="search-icon" />
            <input
                placeholder="Search by name or email"
                value={input}
                onChange={(item) => handleChange(item.target.value)}
            />
        </div>
    );
}

export default SearchBar;
