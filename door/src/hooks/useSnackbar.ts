import { useDispatch } from 'react-redux';
import { changeSnackbarMessage, changeSnackbarVisible } from '@/store/snackbar/snackbarSlice';

const useSnackbar = () => {
    const dispatch = useDispatch();
    const showSnackbar = (message: string) => {
        let timer: NodeJS.Timeout;

        dispatch(changeSnackbarMessage(message))
        dispatch(changeSnackbarVisible(true))

        timer = setTimeout(() => {
            dispatch(changeSnackbarMessage(''))
            dispatch(changeSnackbarVisible(false))
        }, 1500);
    }
    return { showSnackbar }
};

export default useSnackbar;