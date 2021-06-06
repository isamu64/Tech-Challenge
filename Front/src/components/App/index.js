// == Import npm
import React from 'react';

// Import
import './app.css';

//Import components
import Header from '../Header';
import Footer from '../Footer';
import Member from '../Member';
import List from '../List';



//Component App
const App = () => (
  <div className="app">
    <Header/>
    <Member/>
    <List/> 
    <Footer/>   
  </div>
);

//Export
export default App;
