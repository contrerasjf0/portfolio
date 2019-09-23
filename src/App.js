import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav';
import NotesList from './views/NotesList';
import NewNotes from './views/NewNotes';
import EditNote from './views/EditNote';
import Login from './views/Login';
import PrivateRouter from './components/PrivateRouter';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Nav/>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Login}/>
          <PrivateRouter path="/newNote" component={NewNotes} />
          <PrivateRouter exact path="/notes" component={NotesList}/>
          <PrivateRouter path="/note/:uid" component={EditNote}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
