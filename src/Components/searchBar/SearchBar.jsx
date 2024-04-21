import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import SavedUser from "../savedUser/SavedUser";

function SearchBar({ setResults, savedUser, removeSavedUser }) {
    const [input, setInput] = useState("");

    const fetchValue = function (value) {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.users.filter((user) => {
                    const fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;
                    const email = user.email.toLowerCase();
                    return fullName.includes(value.toLowerCase()) || email.includes(value.toLowerCase());
                });
                setResults(results);
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
            {
                savedUser.length > 0 && savedUser && (
                    <div className="saved-user-container">
                        {
                            savedUser.map(user => {
                                return <SavedUser user={user} removeSavedUser={removeSavedUser} key={user.id} />
                            })
                        }
                    </div>
                )
            }
            <div className="search-container">
                <input
                    placeholder="Search by name or email..."
                    value={input}
                    onChange={(item) => handleChange(item.target.value)}
                />
            </div>
        </div>
    );
}

export default SearchBar;