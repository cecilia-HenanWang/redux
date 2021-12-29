import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import {logout, selectUser} from "../app/userSlice";
import { useSelector,useDispatch } from "react-redux";


const Layout = () => {


    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const onlogout = ()=>{
    
        dispatch(
            logout()
        );

    }

    if(user){
        return (
        <>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
                &nbsp; &nbsp; &nbsp; 
                <Link to="/Account">Hello {user.name}</Link>
                &nbsp; &nbsp; &nbsp; 
                <Link to="/"><button onClick={()=>onlogout()}> Logout </button></Link>
            </li>
            </ul>
        </nav>

        <Outlet />
        </>
  )}

  return (
    <>
    <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
            &nbsp; &nbsp; &nbsp; 
            <Link to="/">please login</Link>
        </li>
        </ul>
    </nav>

    <Outlet />
    </>
)

};

export default Layout;