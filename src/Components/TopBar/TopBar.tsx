import { Breadcrumbs, SignIn } from "../index";
import { TopBarContainer } from "../../ui";
import { Box } from "@mui/material";
import { SignOut } from "../SignButtons/SignOut";
import { AdminPanel } from "../SignButtons/AdminPanel";

export function TopBar() {
 const buttonsContainerStyles = {
  marginLeft: "auto",
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
