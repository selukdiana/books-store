import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import {Provider} from 'react-redux';
import { HomePage } from './pages/home-page';
import { Header } from './components/header';
import {store} from './store'


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
