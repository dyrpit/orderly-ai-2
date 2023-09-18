import { Outlet } from 'react-router-dom';
import { Footer, MainContainer } from '../Components';
import Breadcrumbs from '../Components/Breadcrumps';
import { NavBar } from '../Components/NavBar/NavBar';

export default function RootLayout() {
    return (
        <div className="RootLayout">
            <NavBar />
            <MainContainer>
                <main>
                    <Outlet></Outlet>
                </main>
            </MainContainer>
            <Footer />
        </div>
    );
}