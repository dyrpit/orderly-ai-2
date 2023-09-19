import { Outlet } from "react-router-dom";
import { Footer, MainContainer } from "../Components";
import { NavBar } from "../Components/NavBar/NavBar";
import { TopBar } from "../Components/index";

export default function RootLayout() {
 return (
  <div className="RootLayout">
   <NavBar />
   <MainContainer>
    <TopBar></TopBar>
    <Outlet />
   </MainContainer>
   <Footer></Footer>
  </div>
 );
}
