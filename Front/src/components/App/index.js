//Import React
import React, {useState} from 'react';

// Import
import './app.css';

//Import components
import Header from '../Header';
import Footer from '../Footer';
import Member from '../Member';
import List from '../List';


const BASE_URL = 'http://localhost:3000';
import axios from 'axios';

//Component
const App = () => { 
   

  //Local state
  const [members, setMembers] = useState([]);

  
  const home = () => {
    console.log('affiche les membres');
    axios ({
      method: 'get',
      url: `${BASE_URL}`
    })
    
    .then((res) => {      
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })

    useEffect(()=> {
      home()
    }, []);

  }
  
  return (
  <div className="app">
    <Header/>
    <Member 
    onChange={(text) => {
      console.log('je tape du texte', text)
    }}
    
    onSubmit={() => {
      console.log('je soumet le formulaire')
    }}
    />
    <List/> 
    <Footer/>   
  </div>
)};

//Export
export default App;
