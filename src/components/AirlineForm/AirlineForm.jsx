import { useDispatch } from "react-redux";
import React, { useState, useSelector } from 'react';

function AirlineForm() {
    const [newAirline, setNewAirline] = useState('')
    // Dispatch
  const dispatch = useDispatch();

  // ON SUBMIT OF THE FORM
  const handleSubmit = (event) => {
    event.preventDefault();
    // Tell redux that we want to add the new Element
    dispatch({
      type:'ADD_AIRLINE',
      //Pass in the element name, taht we're tracking in state
      payload: newAirline 
    })
    // clear form field
    setNewAirline('');
  }


  return (
    <div className="App">

      <h1>Redux Airport</h1>

      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Airline Name' value={newAirline} onChange={event => setNewAirline(event.target.value)} />
      <button type='submit'>Add Airline</button>
      </form>
      
    </div>
  );
  
}

export default AirlineForm;