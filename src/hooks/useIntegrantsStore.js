import { useDispatch, useSelector } from 'react-redux';
import semonApi from '../api/semonApi';
import { onLoadIntegrants, onLogoutIntegrants } from '../store/semonapp/integrantsSlice'; 

export const useIntegrantsStore = () => {
    const dispatch = useDispatch();
    const { integrants } = useSelector(state => state.integrants);

    const startLoadingIntegrants = async () => {
        try {
            const { data } = await semonApi.get("/usuarios");
            dispatch(onLoadIntegrants(data.usuarios));
        } catch (error) {
            console.log(error);
        }
    }
    const startLogoutIntegrants = () => {
        dispatch(onLogoutIntegrants([]));
    }

    return {
        integrants,
        startLoadingIntegrants,
        startLogoutIntegrants
    }
}
