import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserDashBoard from './components/dashboard/UserDashBoard';

const App = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/dashboard"  element={<UserDashBoard />} />
    </Routes>
  );
};

export default App;
