import { type FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginScene from './pages/scenes/LoginScene';
import ShopScene from './pages/scenes/ShopScene';
import BlogScene from './pages/scenes/BlogScene';

const App: FC = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/scene/login" element={<LoginScene />} />
         <Route path="/scene/shop" element={<ShopScene />} />
         <Route path="/scene/blog" element={<BlogScene />} />
      </Routes>
   );
};

export default App;
