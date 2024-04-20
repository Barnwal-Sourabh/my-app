import React from "react";
import "./SearchResultInd.css";

function SearchResultInd({ result}) {
    return (
        <div
            className="search-result-individual"
            onClick={(e) => alert(`You clicked on ${result.name}`)}
        >
            <img className="image-class" src={result.image} alt="image"/>
            <p>
                <span>{result.firstName}</span> {" "}
                <span>{result.lastName}</span>
            </p>
        </div>
    );
}

export default SearchResultInd;
