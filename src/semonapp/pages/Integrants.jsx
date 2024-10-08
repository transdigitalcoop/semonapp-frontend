import { useState } from "react";
import { TableIntegrants } from "../components";
import { SemonAppLayout } from "../layout/SemonAppLayout";
import { UserPlusIcon as UserIconSolid } from "@heroicons/react/24/solid";
import { UserPlusIcon as UserIconOutline } from "@heroicons/react/24/outline";

export const Integrants = () => {
  // Estado para manejar el hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SemonAppLayout>
      <div className="w-full mx-auto bg-slate-50 rounded-lg h-full border-2 shadow-sm shadow-slate-500">
        <div className="mt-2 flex justify-end relative">
          <div className="group flex flex-col items-center">
            <button
              // Cambiar estado al hacer hover
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Cambiar ícono según el estado */}
              {isHovered ? (
                <UserIconSolid className="h-8 w-8 text-slate-800 mr-8 my-2 " />
              ) : (
                <UserIconOutline className="h-8 w-8 text-slate-800 mr-8 my-2 " />
              )}
            </button>
            {/* Tooltip */}
            {/* <span className="opacity-0 md:group-hover:opacity-100 text-xs text-white bg-slate-800 rounded-md px-2 py-1 absolute top-10 transition-opacity duration-300">
              Añadir Integrante
            </span> */}
          </div>
        </div>
        <TableIntegrants />
      </div>
    </SemonAppLayout>
  );
};
