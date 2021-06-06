//Import React
import React, {useState} from 'react';

// Import
import './app.css';

//Import components
import Header from '../Header';
import Footer from '../Footer';
import Member from '../Member';
import List from '../List';



//Component
const App = () => {

  
  
  //const [messageInput, setMessageInput] = useState('');  

  return (
  <div className="app">
    <Header/>
    <Member 
    onChange={(text) => {
      console.log('je tape du texte')
    }}
    
    onSubmit={() => {
      console.log('je soumet le form')
    }}
    />
    <List/> 
    <Footer/>   
  </div>
)};

//Export
export default App;
