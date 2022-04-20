import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">All catogory
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">mobile</a></li>
    <li><a href="#">car</a></li>
    <li><a href="#">bike</a></li>
  </ul>
</div> 
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
