//Import React
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Import
import './app.css';

//Import components
import Header from '../Header';
import Footer from '../Footer';
import Member from '../Member';
import List from '../List';

//URl to connect to the back
const BASE_URL = 'http://localhost:3000';


//Component
const App = () => { 
   
  //Local state
  const [members, setMembers] = useState([]);
  //const [inputText, setInputText] = useState('');

  
  const home = () => {
    //console.log('affiche les membres');
    axios ({
      method: 'get',
      url: `${BASE_URL}`
    })
    
    .then((res) => {      
      console.log(res);
      const {data} = res;
      setMembers(data);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const addMember = () => {
    //console.log('affiche les membres');
    const {name} = members;
  axios ({
      method: 'post',
      url: `${BASE_URL}/members`,
      name
   })
    
    .then((res) => {      
      console.log(res);
     const {data} = res;
      setMembers(data);
    })
    .catch((err) => {
      console.log(err)
    })
  }
 

  useEffect(()=> {    
    home()
  }, []);
  console.log('contenu du state',members);
  
  return (
  <div className="app">
    <Header/>
    <Member
    //member= {members}
    //inputText='pouet'
    //setMembers={setMembers} 
    handleChange={(text) => {
      console.log('je tape du texte', text)
    }}
    
    handleSubmit={() => {
      console.log('je soumet le formulaire')
    }}
    //text={setInputText}
    />
    <List member= {members}/> 
    <Footer/>   
  </div>
)};

//Export
export default App;
