import React,{useContext} from 'react';
import {firebaseContext} from '../../store/context'
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom';
import Firebase from '../../firebase/config'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history=useHistory();
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const {firebase} = useContext(firebaseContext)
  const handleLogin=(e)=>{
    e.preventDefault()
     Firebase.auth().signInWithEmailAndPassword(Email,Password).then(()=>{
        history.push('/')
     }).catch((error)=>{
       alert(error.message)
     })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
