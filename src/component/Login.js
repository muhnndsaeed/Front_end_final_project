import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {


    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
   
    const postData = () => {
      axios
        .post(`https://62d3e3985112e98e4846dc8d.mockapi.io/login`, {
          username,
          password,
        })
        .then((res) => {
          console.log(res);
          navigate("/Blogs");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
  return (
    <div className='content'>
         <form className='form-group'>

<h3>Log in</h3>

<div className="form-group">
    <label>User Name</label>
    <input type="email" className="form-control" placeholder="Enter User Name" onChange={(e) => {setUsername(e.target.value);}} />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value);}} />
</div>

<div className="form-group">
    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
    </div>
</div>

<button type="submit" className="btn btn-dark btn-lg btn-block" onClick={postData}>Login</button>

</form>
    </div>
  )
}
