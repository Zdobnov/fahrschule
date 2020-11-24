import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Utils
import { StateProvider } from './context/LanguageContext';

// Pages
import About from './pages/About';
import Main from './pages/Main';

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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <PrimaryBar as="footer">
          <div className="wrapper">
            <div className="footer__copyrights">
              Copyright © 2020 Alle Rechte vorbehalten 2Drive fahrschule. Datenschutz.
            </div>
          </div>
        </PrimaryBar>
      </StateProvider>
    </Router>
  );
}

export default App;
