import React from 'react';
import { useContext,useState,useEffect } from 'react';
import { firebaseContext } from '../../store/context';
import { PostContext } from '../../store/postContext';

import './View.css';
function View() {
const [userDetails,setUserDetails]=useState()
const {postDetails} = useContext(PostContext)
const {firebase}=useContext(firebaseContext)
useEffect(()=>{
  firebase.firestore().collection('users').where('id','==',postDetails.userId).get().then((res)=>{
    res.forEach(doc=>{
      setUserDetails(doc.data())
    })
  })
},[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.catogory}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
