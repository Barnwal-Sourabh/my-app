import React from "react";
import "./SearchResultInd.css";

function SearchResultInd({ result, saveUser }) {
    const handleClick = () => {
        saveUser(result);
    }

    return (
        <div className="search-result-individual" onClick={handleClick}>
            <img className="image-class profile-picture" src={result.image} alt={result.firstName}/>
            <p className="name"> <span>{result.firstName}</span> <span>{result.lastName}</span> </p>
            <p className="email">{ result.email}</p>
        </div>
    );
}

export default SearchResultInd;