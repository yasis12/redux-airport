import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airlineList = (state = [], action) => {
    console.log('hi i\'m a reducer in airline list');
    if (action.type === 'ADD_AIRLINE') {
      console.log(`The airline added was ${action.payload}`);   
      //[ old array contents, new item]
      return [...state, action.payload]
    }
    return state
  };

/** TODO: Create store */
const storeInstance = createStore(

    combineReducers (
    { 
        airlineList
    }
    ),
    applyMiddleware(
      logger
    )
  );


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
         <App />
        </Provider>
        
    </React.StrictMode>
);