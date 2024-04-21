import React from "react";
import "./SearchBarResult.css";
import SearchResultInd from "../searchResultIndividuals/SearchResultInd";

function SearchBarResult({ results, saveUser }) {
    return (
        <div className="search-result">
            <div className="options">
                {results.map((result, index) => {
                    return (
                        <SearchResultInd
                            key={index}
                            result={result}
                            saveUser={saveUser}
                            image={result.image}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SearchBarResult;