import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, firebaseContext } from '../../store/context';
import {useHistory} from 'react-router-dom'
function Header() {
  const {user}=useContext(AuthContext);
  const {firebase} =useContext(firebaseContext)
  const history  = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="loginPage">
          <span onClick={()=>{
            history.push('/login')
          }}>{user?user.displayName:"Login"}</span>
          <hr />
        </div>
        <div className="loginPage">
        { user && <span onClick={()=>{
            firebase.auth().signOut();
            history.push('/login')
          }}>Logout</span>}
          <hr />
        </div>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent"  onClick={()=>{
              history.push('/create')
            }}>
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
