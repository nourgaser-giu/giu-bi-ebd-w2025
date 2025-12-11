import { createContext, useState, useEffect } from "react";
import { authAPI } from "../api/auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in by trying to fetch current user
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Try to get current user from backend using JWT cookie
        const userData = await authAPI.getCurrentUser();
        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        // User is not logged in or token is invalid
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const register = async (username, email, password) => {
    try {
      await authAPI.register(username, email, password);
      // Redirect to login page then refresh
      window.location.href = "/login";
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const userData = await authAPI.login(email, password);
      setUser(userData);
      // Redirect to home then refresh
      window.location.href = "/";
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
      setUser(null);
    } catch (error) {
      // Clear user even if logout request fails
      setUser(null);
    } finally {
      // Refresh page to home
      window.location.href = "/";
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

