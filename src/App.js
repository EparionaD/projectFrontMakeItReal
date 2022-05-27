import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/authContext';
import { PostProvider } from './context/postContext';
import {
  CreatePage,
  HomePage,
  LoginPage,
  PostPage,
  RegisterPage,
} from './pages';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/posts' element={<PostPage />} />
          <Route
            path='/create'
            element={
              <ProtectedRoute>
                <CreatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
