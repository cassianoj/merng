import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
import './App.css';


function App() {
  return (
    <Router>
      <Route exact path='/' component ={Home}q></Route>
      <Route exact path='/login' component ={Login}q></Route>
      <Route exact path='/register' component ={Register}q></Route>
    </Router>
  );
}

export default App;
