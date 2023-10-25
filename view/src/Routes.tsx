import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/dashboard"  element={<Header />} />
    </Routes>
  );
};

export default App;
