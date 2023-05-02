import { useContext } from "react";

import { UsuarioLogadoContext } from "app/shared/contexts";

export const useUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);
  return context;
};
