import { Breadcrumbs, SignIn } from "../index";
import { TopBarContainer } from "../../ui";
import { Box } from "@mui/material";
import { SignOut } from "../SignButtons/SignOut";
import { AdminPanel } from "../SignButtons/AdminPanel";
import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";

export function TopBar() {
 const { showButtons } = useContext(OrderAiContext);
 const buttonsContainerStyles = {
  marginLeft: "auto",
  display: showButtons,
 };

 return (
  <>
   <TopBarContainer>
    <Breadcrumbs></Breadcrumbs>
    <Box sx={buttonsContainerStyles}>
     <SignIn></SignIn>
     <SignOut></SignOut>
     <AdminPanel></AdminPanel>
    </Box>
   </TopBarContainer>
  </>
 );
}
