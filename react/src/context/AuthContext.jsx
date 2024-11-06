import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    // Verifica se já existe um usuário salvo no localStorage
    const salvarUsuario = localStorage.getItem('usuario');
    return salvarUsuario ? JSON.parse(salvarUsuario) : null;
  });

  const login = (userData) => {
    setUsuario(userData);
    localStorage.setItem('usuario', JSON.stringify(userData));
  };
  
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };
  

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}