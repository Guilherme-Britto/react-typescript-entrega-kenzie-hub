import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ProtectedRoutes from '../pages/ProtectedRoutes';
import Register from '../pages/Register/Register';
import { TechsProvider } from '../providers/TechsContext/TechsContext';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/home' element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <TechsProvider>
              <Home />
            </TechsProvider>
          }
        />
      </Route>

      <Route
        path='*'
        element={
          <h1>
            404 pagina não encontrada{' '}
            <Link to='/'>-- Ir para página inicial</Link>
          </h1>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
