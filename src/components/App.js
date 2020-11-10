import { StateProvider } from '../context/LanguageContext';

import Header from './Header';
import Nav from './Nav';

function App() {
  return (
    <StateProvider>
      <Header>123</Header>
      <Nav>123</Nav>
    </StateProvider>
  );
}

export default App;
