import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux"


// BrowserRouter has HTML5 History API with methods to keep our application
// in sync with our URL 
//Developers use "as" to declare an Alias for BrowserRouter
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.Strictmode is there to look for potential errors
  //we want to wrap our whole application inside Router so it will render the 
  //components we want based on the URL
  <React.StrictMode>
    <Provider store={store}>
    <Router>
<App />
</Router>
    </Provider>
    
    
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
