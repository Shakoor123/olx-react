import React from 'react';
import { useState, useContext } from 'react/cjs/react.development';
import Firebase from '../../firebase/config';
import Logo from '../../olx-logo.png';
import { firebaseContext } from '../../store/context';
import { useHistory } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const history=useHistory()
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const {firebase} = useContext(firebaseContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    Firebase.auth().createUserWithEmailAndPassword(Email, Password).then((result) => {
      result.user.updateProfile({displayName:Username}).then(() => {
        const db = Firebase.firestore();
      db.collection("users").add({
        id: result.user.uid,
        username: Username,
        phone: Phone
      }).then(()=>{
          history.push('/login')
      })
    })
   })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
