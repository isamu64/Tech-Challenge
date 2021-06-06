//Import React
import React from 'react';

//Import CSS file
import './member.css';



const Member = () => (
  <div className = 'member'>
    <h2 
      className = 'member-title'>
      Ajouter un(e) Argonaute
    </h2>
  
    <form className="member-form">
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
