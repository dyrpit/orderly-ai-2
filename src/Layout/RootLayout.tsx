import { Outlet } from 'react-router-dom'
import { Footer, MainContainer } from '../Components'
import Breadcrumbs from '../Components/Breadcrumps'

export default function RootLayout() {
    return(
        <div className="RootLayout">
            <MainContainer>
                <main>
                <Breadcrumbs />
                    <Outlet></Outlet>
                </main>
            </MainContainer>
            <Footer></Footer>
        </div>
    )
}