import { Navigate, Route, Routes } from "react-router-dom";
import { Calendar, Certificados, Integrants, Proyectos, SemonappPage } from "../pages";
import { useAuthStore } from "../../hooks";
import { useEffect } from "react";


export const SemonAppRoutes = () => {
  const { checkAuthToken } = useAuthStore();
  // const authStatus = "not-authenticated";
  // const status = "authenticated";
  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SemonappPage />} />
      <Route path="/integrantes" element={<Integrants />} />
      <Route path="/Certificados" element={<Certificados />} />
      <Route path="/Proyectos" element={<Proyectos />} />
      <Route path="/Calendario" element={<Calendar />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
