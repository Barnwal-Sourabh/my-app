import React from 'react'
import './SavedUser.css'
import { IoClose } from 'react-icons/io5';

function SavedUser({ user, removeSavedUser }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleClick = () => {
    removeSavedUser(user)
  }

  return (
    <div className="SavedUser">
      <img src={user.image} alt={user.firstName} className='profile-picture' />
      <p><span>{capitalizeFirstLetter(user.firstName)}</span> <span>{capitalizeFirstLetter(user.lastName)}</span></p>
      <IoClose onClick={handleClick} className='close-icon' />
    </div>
  );
}

export default SavedUser