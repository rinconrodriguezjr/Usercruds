import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UsersList = ({usersList, getUser, selectUser}) => {

    usersList.sort((a,b)=>a.last_name.localeCompare(b.last_name));
    
    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then(()=>getUser());
    };



    return (
        <div className='user-list'>
                <h1><b>Users List</b></h1> <br />
            <div className='user-containe'>
                { 
                    usersList.map(user => (
                        <div className='user-container'>
                            <li key={user.id}>
                                <h4> <b> <span> Name: </span>{" "}</b> {" "} <b>{user.last_name}</b> {","} <b> {user.first_name}</b></h4>
                                <ul>
                                    <li><b><span>Email:</span></b>{" "} {user.email} {" "}</li>
                                    <li><b><span>Birthday:</span></b>{" "} {user.birthday} {" "}</li>
                                    <li><b><span>Password:</span></b>{" "} {user.password} {" "}</li>
                                </ul>                     
                                <div className='buttoncontainer'>
                                    <button className='button sel' onClick={() => selectUser(user)}> <b>Select</b> </button>
                                    <button className='button del' onClick={() => deleteUser(user)}> <b>Delete</b> </button>
                                </div>
                            </li>
                        </div>
                
                    ))
                }
            </div>
        </div>
    );
};

export default UsersList;