import { useEffect, useRef } from "react"
import { XMarkIcon } from "@heroicons/react/24/solid";
export const ModalRegisterIntegrants = ({RegisterIntegrant, setRegisterIntegrant}) => {

    const modal = useRef(null);

    useEffect(() => {
        const clickHandler = ({ target }) => {
          if (!modal.current) return;
          if (RegisterIntegrant || modal.current.contains(target)) return;
          setRegisterIntegrant(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
      }, [RegisterIntegrant, setRegisterIntegrant]);
  return (
    <div className="absolute bg-gray-900/75 flex justify-center items-center h-screen top-0 w-screen left-0">
        <div className="bg-white w-[90%] border-2 h-[calc(100vh-200px)] md:h-[90%] md:w-1/2" ref={modal} >
            <div className="relative">
                <button onClick={()=>setRegisterIntegrant(false)}><XMarkIcon className="size-8 absolute top-0 right-0 m-2"/></button>
            </div>
        </div>
    </div>
  )
}
