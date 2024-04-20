import React from "react";

function SavedUser({ user, setuser}) {

    const capitalizeFirstLetter = (str) => {
        return str
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const handleClick = () => {
        
    }

    return (
        <div className="SavedCity"  onClick={handleClick}>
            <p>{capitalizeFirstLetter(user)}</p>
        </div>
    );
}

export default SavedUser;
