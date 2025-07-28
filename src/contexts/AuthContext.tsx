import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  uid: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      // Simulate login - in real app, you'd use Firebase auth
      console.log('Login attempt:', email, password)
      const mockUser = { uid: '1', email: email }
      setUser(mockUser)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  };

  const logout = async () => {
    try {
      // Simulate logout
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  };

  const clearAuth = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
}; 