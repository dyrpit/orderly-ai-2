import CircularProgress from '@mui/material/CircularProgress';
import { Loading } from './Loading.style';

export function LoadingAPI() {
 return (
    <Loading>
        <CircularProgress color="secondary" />
    </Loading>
 );
}
