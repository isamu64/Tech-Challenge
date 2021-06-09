//Import React
import React, { useState, useEffect } from 'react';

//Import CSS file
import './list.css';

//Import axios
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';






//Component
const List = () => {
  
  const [members, setMembers] = useState([]);

  const home = () => {

    axios ({
      method: 'get',
      url: '${BASE_URL}/'
    })
    
    .then((result) => {
      const {data} = result;
      setMembers(data);
    })
    .catch((err) => {
      console.trace(err)
    })
  }

  useEffect(()=> {
    home();
  }, []);
  
  
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
