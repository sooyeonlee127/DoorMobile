import ReactDOM from 'react-dom';
import { Container} from './SnackBar.style'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { changeSnackbarMessage, changeSnackbarVisible } from '@/store/snackbar/snackbarSlice';

const SnackBar = () => {
    const message = useSelector((state: RootState) => state.snackbar.message)
    const isVisible = useSelector((state: RootState) => state.snackbar.isVisible)


    return (
        <>{ReactDOM.createPortal(<Container>{message}</Container>, document.getElementById('snackbar')!)}</>
    )
}
export default SnackBar