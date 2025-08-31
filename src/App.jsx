import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './pages/context/AuthContext';
import Signin from './pages/components/Signin';
import Signup from './pages/components/Signup';
import Dashboard from './pages/components/Dashboard';
import PrivateRoute from './pages/components/PrivateRoute';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/Dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App; 