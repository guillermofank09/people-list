import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { PeopleList } from './components/People/List'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/people' component={PeopleList}></Route>
        <Redirect to='/people' />
      </Switch>
    </Router>
  );
}

export default App;
