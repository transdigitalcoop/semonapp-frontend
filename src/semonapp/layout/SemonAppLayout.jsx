import { useState } from "react";
import { Sidebar, Header } from "../components";

export const SemonAppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    return window.innerWidth >= 768;
  });

  return (
    <>
      <div className="flex  h-screen w-full bg-slate-200">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-col w-full">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-grow ">
            <div className="h-full max-h-[calc(100vh-96px)] w-[95%] mx-auto py-6 px-2 md:p-6 animate__animated animate__fadeIn animate__faster">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
