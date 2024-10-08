import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { SemonAppRoutes } from "../semonapp/routes/SemonAppRoutes";

export const AppRouter = () => {
  // const { status, checkAuthToken } = useAuthStore();
  // const authStatus = "not-authenticated";
  const status = "authenticated";
  //   useEffect(() => {
  //     checkAuthToken();
  //   }, []);

  if (status === "checking") {
    return (
      <div className="h-screen w-full grid place-items-center bg-slate-200">
        <div className="w-16 h-16 border-4 border-t-slate-700 border-slate-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<SemonAppRoutes />} />
        </>
      )}
    </Routes>
  );
};
