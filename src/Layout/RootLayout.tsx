import { Outlet } from 'react-router-dom';
import { AdminContent, Footer, MainContainer } from '../Components';
import Breadcrumbs from '../Components/Breadcrumps';
import { NavBar } from '../Components/NavBar/NavBar';

export default function RootLayout() {
    return (
        <div className="RootLayout">
            <NavBar />
            <MainContainer>
                <AdminContent />
                <Breadcrumbs />
                <Outlet></Outlet>
            </MainContainer>
            <Footer></Footer>
        </div>
    );
}