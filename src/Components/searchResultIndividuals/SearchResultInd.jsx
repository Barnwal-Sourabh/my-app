import React from "react";
import "./SearchResultInd.css";

function SearchResultInd({ result, updateSavedUser }) {
    const handleClick = () => {
        updateSavedUser(result);
    };

    return (
        <div
            className="search-result-individual"
            onClick={handleClick}
        >
            <img className="image-class" src={result.image} alt="user"/>
            <p>
                <span>{result.firstName}</span> {" "}
                <span>{result.lastName}</span>
            </p>
        </div>
    );
}

export default SearchResultInd;