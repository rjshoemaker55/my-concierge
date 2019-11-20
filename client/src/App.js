import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './screens/Landing';
import Results from './screens/Results';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/results' component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
