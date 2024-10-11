import { useSelector } from "react-redux";

export const TableIntegrants = ({Integrant}) => {
  const {integrants} = useSelector(state => state.integrants);
  
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden border-2 rounded-lg md:w-[95%] mx-auto h-full max-h-[600px] md:max-h-[500px] overflow-y-auto scrollbar-custom">
            <table className="min-w-full text-center text-sm font-light h-full ">
              <thead className=" border-b bg-slate-800 font-medium text-white dark:border-neutral-500 dark:bg-slate-900">
                <tr>
                  <th scope="col" className=" px-6 py-4">
                    Nombre
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Semestre
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Programa
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Fecha vinculacion
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                integrants.map((integrant) => (
                  <tr key={integrant._id} className="border-b dark:border-slate-300">
                    <td className="whitespace-nowrap  px-6 py-4">{`${integrant.primerNombre} ${integrant.primerApellido}`}</td>
                    <td className="whitespace-nowrap  px-6 py-4">{integrant.semestre}</td>
                    <td className="whitespace-nowrap  px-6 py-4">{integrant.programa}</td>
                    <td className="whitespace-nowrap  px-6 py-4">{new Date(integrant.fechaVinculacion).toLocaleDateString("es-ES", {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
