import { type FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './pages/MainLayout';
import ScenePage from './pages/scenes/ScenePage';

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
            path="/scene/:sceneName"
            element={
               <MainLayout>
                  <ScenePage />
               </MainLayout>
            }
         />
      </Routes>
   );
};

export default App;
