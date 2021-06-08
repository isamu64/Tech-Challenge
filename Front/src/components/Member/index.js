//Import React
import React from 'react';

//Import CSS file
import './member.css';


//Component
const Member = ({onChange, onSubmit}) => (

  <div className = 'member'>
    <h2 
      className = 'member-title'>
      Ajouter un(e) Argonaute
    </h2>
  
    <form 
      className="member-form"
      onSubmit={(evt) => {
        evt.preventDefault(); 
        onSubmit();       
      }}
    >
      <label 
        className = 'member-label' 
        for="name">
        Nom de l'Argonaute
      </label>
    
      <input 
        id="name" 
        name="name" 
        type="text" 
        placeholder="Charalampos" 
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
);

//Export
export default Member;
