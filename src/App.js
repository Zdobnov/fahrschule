import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Utils
import { StateProvider } from './context/LanguageContext';

// Pages
import About from './pages/About';
import Main from './pages/Main';

// Components
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <StateProvider>
        <Header />
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Header />
        <Footer />
      </StateProvider>
    </Router>
  );
}

export default App;
