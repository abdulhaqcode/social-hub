import React, { createContext, useContext, useState, useCallback } from 'react';
import type { User } from '@/types';
import { currentUser } from '@/data/mock';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: { email: string; password: string; username: string; displayName: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(currentUser); // mock: auto-logged in

  const login = useCallback(async (_email: string, _password: string) => {
    setUser(currentUser);
  }, []);

  const signup = useCallback(async (_data: { email: string; password: string; username: string; displayName: string }) => {
    setUser(currentUser);
  }, []);

  const logout = useCallback(() => { setUser(null); }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be within AuthProvider');
  return ctx;
};
