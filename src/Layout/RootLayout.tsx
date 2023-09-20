import { Outlet } from "react-router-dom";
import { Footer, LoginModal, MainContainer, RegisterModal } from "../Components";
import { NavBar } from "../Components/NavBar/NavBar";
import { TopBar } from "../Components/index";
import { useContext } from "react";
import { OrderAiContext } from "../Context/ContextProvider";

export default function RootLayout() {
  // Tu prawdopodobnie robię syf tym wkręcaniem isModalOpen w RootLayout, więc do omówienia i zmienie, bo póki co nie mam pomysłu
  const { isModalOpen, currentModal } = useContext(OrderAiContext);
  return (
    <div className="RootLayout">
      <NavBar />
      <MainContainer>
        <TopBar></TopBar>
        {isModalOpen && (
          <>
            {currentModal === "Sign In" && <LoginModal />}
            {currentModal === "Sign Up" && <RegisterModal />}
          </>
        )}
        <Outlet />
      </MainContainer>
      <Footer></Footer>
    </div>
  );
}
