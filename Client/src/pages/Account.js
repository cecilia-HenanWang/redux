import React, { Component } from 'react';
import {selectUser} from "../app/userSlice";
import { useSelector } from "react-redux";
//topics needed hashing password


const Account =()=> {
  
    const user = useSelector(selectUser);

  
    return(
        <div className="App">
            
            <h2> My Account Informations </h2>
            <p>my id is : {user.uid}</p>
            <p>my name is : {user.name}</p>
            <p>my email is : {user.email}</p>
            <p>my loggedin status: {user.loggedIn}</p>

        </div>
    );  
}

export default Account;