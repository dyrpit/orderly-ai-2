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
  position: "absolute",
  right: 0,
  top: 0,
  backgroundColor: "#5C358E",
 };
 const wrapperStyles = {
  position: "relative",
 };
 return (
  <Box sx={wrapperStyles}>
   <Breadcrumbs />
   <Box sx={buttonsContainerStyles}>
    <SignIn />
    <SignOut />
    <AdminPanel />
   </Box>
  </Box>
 );
}
