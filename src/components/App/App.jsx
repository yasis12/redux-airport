import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const [newAirline, setNewAirline] = useState('')

  // Dispatch
  const dispatch = useDispatch();

  // target what is in the airline form
  const airlineList = useSelector(store => store.airlineList);

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


  //RETURN
  return (
    <div className="App">

      <h1>Redux Airport</h1>

      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Airline Name' value={newAirline} onChange={event => setNewAirline(event.target.value)} />
      <button type='submit'>Add Airline</button>
      </form>
     
      <table>
        <tr>
          <th>Airlines</th>
        </tr>
            {airlineList.map((airline, i) =>(
              <tr key={i}>{airline}</tr>
            ))}
      </table>
      
    </div>
  );
}

export default App;
