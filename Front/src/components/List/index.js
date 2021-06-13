//Import React 
import React from 'react';


//Import CSS file
import './list.css';



//Component
const List = ({member}) => {
  
  
  return (

    <div className = 'list'>
    <h2 className = 'list-title'>
      Membres de l'équipage
    </h2>

    <section>
      
      {
      member.map((memberObject) => (
        <div
          className="list-item"
          key = {memberObject.id}
        >
          {memberObject.name}
        </div>
      ))
      }
      

    </section>
  </div>
  )
    };
    

    
  


//Export
export default List;


