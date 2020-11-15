import React from 'react';
import { Link } from 'react-router-dom';
 import axios from 'axios';

const UserCard = props => {

  const handleDelete = (event, id) => {
    event.preventDefault()
    axios
    .delete(`https://water-my-plants2020.herokuapp.com/api/users/${props.id}`)
    .then(result => {
      console.log('User was deleted')
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className='profile-card' key={props.id}>
      <div className='delete' onClick={(e) => handleDelete(e, props.id)}>Delete</div>
      <p>UserName: {props.username}</p>
      <p>Phone Number: {props.phoneNumber}</p>
      <Link className='update-user' to={`/users/${props.id}`}>Edit</Link> 
    </div>
  );
};
export default UserCard;