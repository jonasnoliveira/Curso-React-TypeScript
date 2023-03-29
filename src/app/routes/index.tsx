import { PageDashboard, PageLogin } from "app/pages";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={PageLogin} />
        <Route path="/pagina-inicial" Component={PageDashboard} />

        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
