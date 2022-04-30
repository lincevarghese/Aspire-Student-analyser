import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserAuthContextProvider} from './Context/userAuthContext'
import {app} from './Firebase/Config'
ReactDOM.render(
  <UserAuthContextProvider value={{app}}>
    <App />
  </UserAuthContextProvider>,

  document.getElementById("root")
);


reportWebVitals();
