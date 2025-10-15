import { type FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginScene from './pages/scenes/LoginScene';
import ShopScene from './pages/scenes/ShopScene';
import BlogScene from './pages/scenes/BlogScene';
import MainLayout from './pages/MainLayout';

const App: FC = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <MainLayout>
                  <HomePage />
               </MainLayout>
            }
         />
         <Route
            path="/scene/login"
            element={
               <MainLayout>
                  <LoginScene />
               </MainLayout>
            }
         />
         <Route
            path="/scene/shop"
            element={
               <MainLayout>
                  <ShopScene />
               </MainLayout>
            }
         />
         <Route
            path="/scene/blog"
            element={
               <MainLayout>
                  <BlogScene />
               </MainLayout>
            }
         />
      </Routes>
   );
};

export default App;
