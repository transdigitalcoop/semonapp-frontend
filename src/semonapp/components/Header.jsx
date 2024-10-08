import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <div className="flex bg-slate-100 justify-between items-center min-h-24 h-24 w-full px-4 shadow-md border-">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {!sidebarOpen ? (
            <Bars3Icon className="size-7 text-slate-700 md:hidden" />
          ) : (
            <></>
          )}
        </button>
        <div
          className="flex items-center cursor-pointer gap-2 p-2 mr-2"
          onClick={() => setModalOpen(!modalOpen)}
        >
          <h1 className="md:text-xl font-bold text-slate-800">Felipe</h1>
          <img
            src=""
            alt="Perfil"
            className=" border-2 h-10 w-10 bg-slate-50 rounded-full p-6 flex justify-center items-center"
          />
          {modalOpen ? (
            <ChevronDownIcon className="size-6 text-slate-600" />
          ) : (
            <ChevronUpIcon className="size-6 text-slate-600" />
          )}
        </div>
      </div>
      {modalOpen ? (
        <></>
      ) : (
        <div className="absolute right-8 px-2 w-60 z-10 bg-slate-100 top-24 border-2 shadow-sm">
          <div className="border-b-2 border-slate-200 h-10 flex flex-col justify-center">
            <NavLink className="mx-auto flex gap-2">
              <UserIcon className="size-6" /> Perfil
            </NavLink>
          </div>
          <button className="block border rounded-md p-2 mx-auto my-2">
            Cerrar Sesion
          </button>
        </div>
      )}
    </>
  );
};
