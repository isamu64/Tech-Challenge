//Import React
import React, { useState } from 'react';

//Import CSS file
import './list.css';


//Component
const List = () => {
  
  const [newMember, setNewMember] = useState(['Eleftheria', 'Gennadios', 'Lysimachos']);
  
  return (
  
  <div className = 'list'>
    <h2 className = 'list-title'>
      Membres de l'équipage
    </h2>
    <section>
      <div 
        className="list-item">
        Eleftheria
      </div>

      <div 
        className="list-item">
        Gennadios
     </div>

      <div 
        className="list-item">
        Lysimachos
      </div>

    </section>
  </div>
)};

//Export
export default List;
