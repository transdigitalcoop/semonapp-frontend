import { useDispatch, useSelector } from "react-redux"
import { semonApi } from '../api'
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const startLogin = async ({ correoInstitucional, contraseña }) => {
        dispatch(onChecking());
        try {

            const { data } = await semonApi.post("/auth", { correoInstitucional, contraseña });
            localStorage.setItem("token", data.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(onLogin({ name: data.primerNombre, uid: data.uid }));

        } catch (error) {
            dispatch(onLogout("Credenciales incorrectas"));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    //startRegister

    const startRegister = async ({ name, email, password }) => {
        dispatch(onChecking());

        try {
            const { data } = await semonApi.post("auth/new", { name, email, password });
            localStorage.setItem("token", data.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || "--"));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }

    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem("token");
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await semonApi.get("auth/renew");
            localStorage.setItem("token", data.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(onLogin({ primerNombre: data.primerNombre, uid: data.uid }));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        // dispatch(onLogoutCalendar());
        dispatch(onLogout());
    }

    return {
        //*Propiedades
        status,
        user,
        errorMessage,

        //*Medotos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }

}