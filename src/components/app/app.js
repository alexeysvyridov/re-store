import React from 'react';
import './app.css';
import  { withBookstoreService} from '../hoc';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import { HomePage, CardPage } from '../pages'

const App = ({bookstoreService}) => {
 const  books = bookstoreService.getBooks()
  return (
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/card">Card</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/card" component={CardPage} />
    </Switch>
  </Router>
  )
}

export default withBookstoreService()(App);