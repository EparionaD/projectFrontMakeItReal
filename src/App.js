import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/authContext';
import { PostProvider } from './context/postContext';
import {
  CreatePage,
  HomePage,
  LoginPage,
  PostPage,
  RegisterPage,
  Dashboard,
  DetailPage,
} from './pages';
// import Dashboard from './pages/Dashboard';
// import DetailPage from './pages/DetailPage';

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/posts' element={<PostPage />} />
          <Route path='/posts/:id' element={<DetailPage />} />
          <Route
            path='/create'
            element={
              <ProtectedRoute>
                <CreatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/update/:id'
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
        <Toaster />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
