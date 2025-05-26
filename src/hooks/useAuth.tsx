// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const useAuth = (): AuthState => {
  // Initialize isAuthenticated from localStorage to persist state across refreshes
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // Function to simulate a login
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Persist authentication status
    console.log('User logged in!');
  };

  // Function to simulate a logout
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove authentication status
    console.log('User logged out!');
  };

  // Optional: Listen for storage events to synchronize authentication state across tabs
  // This is useful if a user logs out in one tab, other tabs should also reflect logout.
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
