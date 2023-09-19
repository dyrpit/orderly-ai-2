import { Outlet } from 'react-router-dom';
import { Footer, MainContainer } from '../Components';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumps';
import { NavBar } from '../Components/NavBar/NavBar';


export default function RootLayout() {
    return (
        <div className="RootLayout">
            <MainContainer>
                <Breadcrumbs />
                <Outlet />
            </MainContainer>
            <Footer></Footer>
        </div>
    );
}