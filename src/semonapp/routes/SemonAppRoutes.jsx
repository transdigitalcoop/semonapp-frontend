import { Navigate, Route, Routes } from "react-router-dom";
import { Integrants, SemonappPage } from "../pages";

export const SemonAppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SemonappPage />} />
      <Route path="/integrantes" element={<Integrants />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
