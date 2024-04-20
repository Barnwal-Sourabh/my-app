import React from "react";
import "./SearchBarResult.css";
import SearchResultInd from "../searchResultIndividuals/SearchResultInd";

function SearchBarResult({ results }) {
    return (
        <div className="search-result">
            <div className="options">
                {results.map((result, index) => {
                    return <SearchResultInd key={index} result={result} image={"https://randomuser.me/api/"}/>;
                })}
            </div>
        </div>
    );
}

export default SearchBarResult;
