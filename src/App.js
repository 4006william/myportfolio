import React from 'react';
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Resume from './components/Resume'



import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router >
        <div className="App">
        <Route path='/resume' component={ Resume } />
        <Route path='/contacts' component={ Contacts } />
        <Route path='/projects' component={ Projects } />
        <Route exact path='/' component={ Home } />
        </div>
    </Router>
  );
}

export default App;
