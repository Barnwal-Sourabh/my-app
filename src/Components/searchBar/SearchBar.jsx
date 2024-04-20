import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import SavedUser from '../savedUser/SavedUser';
import SearchResultInd from '../searchResultIndividuals/SearchResultInd';

function SearchBar({ setResults }) {
    const [input, setInput] = useState("");
    const [savedUser, setSavedUser] = useState([]);

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

    function updateSavedUser(newUser) {
        setSavedUser(prevUsers => [...prevUsers, newUser]);
    }

    const removeSavedUser = (userToRemove) => {
        setSavedUser((currentSavedUsers) => 
            currentSavedUsers.filter((user) => user.id !== userToRemove.id)
        );
    };

    return (
        <div className="input-container">
            {
                savedUser.map((user, index) => {
                    return <SavedUser key={index} user={user} removeUser={removeSavedUser} />
                })
            }
            <FaSearch id="search-icon" />
            <input
                placeholder="Search by name or email"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            {/* Render SearchResultInd components for each result */}
            {fetchValue.map((result, index) => (
                <SearchResultInd key={index} result={result} updateSavedUser={updateSavedUser} />
            ))}
        </div>
    );
}

export default SearchBar;