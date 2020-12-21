import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Utils
import { StateProvider } from './context/LanguageContext';

// Pages
import Main from './pages/Main';
import Policy from './pages/Policy';

// Components
import Header from './components/Header';

function App() {
  return (
    <Router>
      <StateProvider>
        <Header />
        <Switch>
          <Route path="/policy">
            <Policy />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        {/* footer */}
      </StateProvider>
    </Router>
  );
}

export default App;
