import {
  ArrowLeftIcon,
  HomeIcon,
  UserIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`md:relative z-20 absolute md:flex md:flex-col h-screen bg-slate-800 transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:w-[384px] w-full`}
    >
      <div className="border-b-2 border-slate-400 flex justify-between md:justify-center items-center h-24 px-4 text-white font-bold ">
        <h1 className=" text-xl md:text-2xl text-slate-100">SemonApp</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <ArrowLeftIcon className="size-7 text-slate-300 md:hidden" />
        </button>
      </div>
      <div className="flex-grow">
        <div className="flex flex-col text-white gap-2 mt-7">
          <p className="text-lg text-slate-500 mx-8">MENU</p>
          <NavLink to="/" className="ItemsSidebar">
            <HomeIcon className="IconsSidebar" />
            <h2 className="">Dashboard</h2>
          </NavLink>
          <NavLink to="/integrantes" className="ItemsSidebar">
            <UserIcon className="IconsSidebar" />
            <h2 className="">Integrantes</h2>
          </NavLink>
          <NavLink to="/Proyectos" className="ItemsSidebar">
            <RocketLaunchIcon className="IconsSidebar" />
            <h2 className="">Proyectos</h2>
          </NavLink>
          <NavLink to="/Certificados" className="ItemsSidebar">
            <AcademicCapIcon className="IconsSidebar" />
            <h2 className="">Certificados</h2>
          </NavLink>
        </div>
        <div className="flex flex-col text-white mt-3 gap-2">
          <p className="text-lg text-slate-500 mx-8">APPS</p>
          <NavLink to="/Calendario" className="ItemsSidebar">
            <CalendarDaysIcon className="IconsSidebar" />
            <h2 className="">Calendario</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
