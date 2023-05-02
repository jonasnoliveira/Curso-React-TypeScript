import { AppRoutes } from "app/routes";
import { UsuarioLogadoProvider } from "app/shared/contexts";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <AppRoutes />
    </UsuarioLogadoProvider>
  );
};
