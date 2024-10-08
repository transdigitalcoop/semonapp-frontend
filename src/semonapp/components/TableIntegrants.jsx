export const TableIntegrants = () => {
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
                    Programa
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-slate-300">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    1
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap  px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
