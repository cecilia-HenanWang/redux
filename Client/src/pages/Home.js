//import React, { Component } from 'react';
import {useDispatch} from "react-redux";
import { useState } from "react";
import { login } from "../app/userSlice";

//topics needed hashing password


function Home(props) {
  
    const [AllUserInfo,setAllUserInfo] = useState("");
    const [Name,setName] = useState("");
    const [Mobile,setMobile] = useState("");
    const [loginMessage,setloginMessage] = useState("");
  
    const dispatch = useDispatch();


    const callAPI = ()=> {
        fetch("http://localhost:8000/testAPI")   
        /*
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              UID:1001
            })
        })*/
            .then(res => res.text())
            .then(res => setAllUserInfo(res));
  
    }

    const callLogin = (e)=>{


        fetch("http://localhost:8000/login" ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              Name: Name,
              Mobile:Mobile
            })
        })

        .then(res=>res.json())
        //.then(data => console.log(data))
        //.then(res=>console.log(res.message))
        //.then(data => this.setState({ loginMessage: data }));
        .then(data => {
            if(data.message){

                setloginMessage(data);

            }else{
                console.log(data[0]);
                setloginMessage({message:""});

                dispatch(
                  login({
                    uid:data[0].UID,
                    name:data[0].Name,
                    mobile:data[0].Mobile,
                    email:data[0].Email,
                    loggedIn:"true",
                  })
                );
            }

        });
        //.then(res=>res[0])
        //.then(res=>console.log(res));
        //怎么redirect，从这边send data还是从服务器send
    }

    
    //componentDidMount() {
    //    this.callAPI();
    //    console.log("123");
    //}
    
  
 
      return (
        <div className="App">
          
            <p>Test get all userinfo from DB</p>
            <button onClick={ callAPI }>get all user information from MySQL</button>
            <p>{AllUserInfo}</p>
   
          
            <br/> <br/> <br/>
            <p> using form -----------------------------</p>
            <p>Test insert into DB</p>
            <form action = "http://localhost:8000/users" method = "POST">
              <label>
                Name: <input type = "text" name = "Name"/>  
                <br/>
                Mobile: <input type = "text" name = "Mobile"/>  
  
              </label>
              <br/>
              <br/>
              <input type = "submit" value = "Submit" />
            </form>


            <br/> <br/> <br/>
            <p> new way -----------------------------</p>
            <p>Test Simple Login</p>


            <input onChange={(e)=>setName(e.target.value)} value={Name} type="text" placeholder="Name" required />
            <br/>
		    <input onChange={(e)=>setMobile(e.target.value)} value={Mobile} type="text" placeholder="Mobile" required/>
            <br/><br/>

            <button onClick={ (e)=>callLogin(e) }>login</button>
            <p>{loginMessage.message}</p>
  
        </div>
      );
    
}
  
  
export default Home;