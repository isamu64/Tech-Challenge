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
  useEffect(()=> {
    home()
  }, []);
  //console.log(members);


  //const create = () => {
    //console.log('affiche les membres');
    //axios ({
     // method: 'post',
     // url: `${BASE_URL}/members`,
     // data:name
  //  })
    
  //  .then((res) => {      
  //    console.log(res);
   //   const {data} = res;
  //    setMembers(data);
  //  })
 //   .catch((err) => {
  //    console.log(err)
  //  })
//  }
 // useEffect(()=> {
//    create()
 // }, [members]);
  //console.log(members);
  
  return (
  <div className="app">
    <Header/>
    <Member
    setMembers={setMembers} 
    onChange={(text) => {
      console.log('je tape du texte', text)
    }}
    
    onSubmit={() => {
      console.log('je soumet le formulaire')
    }}
    //text={setInputText}
    />
    <List members= {members}/> 
    <Footer/>   
  </div>
)};

//Export
export default App;
