import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <MenuBar/>
      <Route exact path='/' element={Home} />
      <Route exact path='/login' element={Login} />
      <Route exact path='/register' element={Register} />
    </Router>
  );
}

export default App;
