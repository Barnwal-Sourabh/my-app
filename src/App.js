import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/searchBar/SearchBar";
import SearchBarResult from "./Components/searchBarResult/SearchBarResult";

function App() {
    const [results, setResults] = useState([]);
    const [savedUser, setSavedUser] = useState([]);

    const removeSavedUser = (userToDelete) => {
        const data = savedUser.filter((user) => {
            const name = `${user.firstName} ${user.lastName}`;
            const name2 = `${userToDelete.firstName} ${userToDelete.lastName}`;
            return name !== name2;
        });
        setSavedUser(data);
        addToList(userToDelete);
    };
    const deleteFromList = (userToDelete) => {
        const data = results.filter((user) => {
            const name = `${user.firstName} ${user.lastName}`;
            const name2 = `${userToDelete.firstName} ${userToDelete.lastName}`;
            return name !== name2;
        });
        setResults(data);
    };
    const addToList = (userToAdd) => {
        results.push(userToAdd);
    };

    const saveUser = (userToSave) => {
        if (!savedUser.some((user) => user.id === userToSave.id)) {
            setSavedUser([...savedUser, userToSave]);
        }
        deleteFromList(userToSave);
    };

    return (
        <div className="App">
            <div className="container-search-bar">
                <SearchBar
                    setResults={setResults}
                    savedUser={savedUser}
                    removeSavedUser={removeSavedUser}
                />
                <SearchBarResult results={results} saveUser={saveUser} />
            </div>
        </div>
    );
}
export default App;