//Import React
import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Import CSS file
import './member.css';

const BASE_URL = 'http://localhost:3000';



//Component
const Member = ({setMembers, onChange, onSubmit}) => {
  
  //const [inputText, setInputText] = useState('');
  //const [members, setMembers] = useState([]);


  const create = () => {
    //console.log('affiche les membres');
    axios ({
      method: 'post',
      url: `${BASE_URL}/members`,
      data: name
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

  //useEffect(()=> {
  //  create()
 // }, []);


  return (
    <div className = 'member'>
    <h2 
      className = 'member-title'>
      Ajouter un(e) Argonaute
    </h2>
  
    <form
      //method='post'
      //action='http://localhost:3000/members' 
      className="member-form"

      onSubmit={(evt) => {        
        
        evt.preventDefault();      
        onSubmit();           
      }}
    >
      <label 
        className = 'member-label' 
        htmlFor="name">
        Nom de l'Argonaute
      </label>
    
      <input 
        id="name" 
        name="name" 
        type="text" 
        placeholder="Nom du nouveau membre" 
        onChange= {(evt) => {
          const text = evt.target.value
          onChange(text);
        }}
        
      />
    
      <button 
        type="submit">
        Envoyer
     </button>
     
    </form>
    
  </div>
  
  )
  
      };

//Export
export default Member;
