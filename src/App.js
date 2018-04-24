import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <LinkLogo to="/" ><h3 className="App-logo">abmdb</h3></LinkLogo>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);
export default App;

const LinkLogo = styled(Link)`
  text-decoration: none;
`;
