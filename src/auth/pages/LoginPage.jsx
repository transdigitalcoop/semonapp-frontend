import { useEffect } from "react";
import { useAuthStore, useForm } from "../../hooks";
import Swal from "sweetalert2";

const loginFormFields = {
  correoInstitucional: "",
  Contraseña: "",
};

export const LoginPage = () => {
  const { startLogin, errorMessage } = useAuthStore();
  const {
    correoInstitucional,
    Contraseña,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({
      correoInstitucional: correoInstitucional,
      contraseña: Contraseña,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticacion", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <>
      <div className="h-screen bg-slate-100">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://res.cloudinary.com/dz2zvcfvc/image/upload/v1728277832/Icono_nqzplk.png"
              className="mx-auto size-28 w-auto"
            />
            <h2 className="text-center text-xl md:text-2xl font-bold leading-9 tracking-tight text-slate-700">
              SEMONAPP
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={loginSubmit} method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-slate-900"
                >
                  Correo electronico
                </label>
                <div className="mt-2">
                  <input
                    name="correoInstitucional"
                    type="text"
                    required
                    value={correoInstitucional}
                    onChange={onLoginInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 h-10"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-slate-900"
                  >
                    Contraseña
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    name="Contraseña"
                    type="password"
                    required
                    value={Contraseña}
                    onChange={onLoginInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 h-10"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full h-12 items-center justify-center rounded-md bg-slate-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
