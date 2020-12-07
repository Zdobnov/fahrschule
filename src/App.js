import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Utils
import { StateProvider } from './context/LanguageContext';

// Pages
import About from './pages/About';
import Main from './pages/Main';
import Policy from './pages/Policy';
import Contacts from './pages/Contacts';
import Prices from './pages/Prices';
import License from './pages/License';

// Components
import PrimaryBar from './components/PrimaryBar';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <StateProvider>
        <PrimaryBar as="header" />
        <Nav />
        <Switch>
          <Route path="/license">
            <License />
          </Route>
          <Route path="/prices">
            <Prices />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/policy">
            <Policy />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <PrimaryBar as="footer" />
      </StateProvider>
    </Router>
  );
}

export default App;
