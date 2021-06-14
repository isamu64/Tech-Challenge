//Import React
import React, {useState, useEffect} from 'react';
//import axios from 'axios';

//Import CSS file
import './member.css';

//const BASE_URL = 'http://localhost:3000';



//Component
const Member = ({member, handleChange, handleSubmit}) => {
  
  //const [inputText, setInputText] = useState('');
  //const [members, setMembers] = useState([]);

  //const {name} = members;

  //const addMember = () => {
    //console.log('affiche les membres');
    //axios ({
      //method: 'post',
      //url: `${BASE_URL}/members`,
      //name
    //})
    
    //.then((res) => {      
      //console.log(res);
     // const {data} = res;
    //  setMembers(data);
   // })
   // .catch((err) => {
   //   console.log(err)
  //  })
 // }

  

  return (
    <div className = 'member'>
    <h2 
      className = 'member-title'>
      Ajouter un(e) Argonaute
    </h2>
  
    <form
      method='post'
      action='http://localhost:3000/members' 
      className="member-form"

      onSubmit={(evt) => {
        //evt.preventDefault();
        handleSubmit();
      }}
    >
      <label 
        className = 'member-label' 
        htmlFor="name">
        Nom de l'Argonaute
      </label>
    
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Nom du nouveau membre" 
        required
        //value={members.name}
        onChange= {(evt) => {
          const text = evt.target.value
          handleChange(text);
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
