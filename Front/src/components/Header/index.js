//Import React
import React from 'react';

//Import CSS file
import './header.css';



const Header = () => (
  <div className = 'header'>
    <h1 
      className = 'header-title'
    >
    <img 
      className = 'header-image' 
      src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" 
      alt="Wild Code School logo" 
    />
      Les Argonautes
  </h1>
  </div>
);

//Export
export default Header;
