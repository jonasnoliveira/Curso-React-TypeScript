import { createContext, useCallback, useEffect, useState } from "react";
import React from "react";

interface UsuarioLogadoContextData {
  nomeUsuario: string;
  logout: () => void;
}

interface UsuarioLogadoProviderProps {
  children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<UsuarioLogadoContextData>(
  {} as UsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<UsuarioLogadoProviderProps> = ({
  children,
}) => {
  let [name, setName] = useState("");

  const handleLogout = useCallback(() => {
    console.log("useCallbacks", setName);
  }, [setName]);

  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeUsuario: name, logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
