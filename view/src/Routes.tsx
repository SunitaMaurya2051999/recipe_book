import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserDashBoard from './components/dashboard/UserDashBoard';
import Blog from './components/blog/Blog';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard"  element={<UserDashBoard />} />
      <Route path="/blog"  element={<Blog />} />
    </Routes>
  );
};

export default App;
